import React, { useState, useEffect } from 'react'
import './ManagePost.css';
import './Table.css';
import ModalComponent from '../modal/Modal';

function ManagePost() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  
  const [tableData, setTableData] = useState([]);

  const get_API = "http://localhost:5000/story";

  useEffect(() => {
    fetchData();
  }, []);

  const handleRead = (user) => {
      setSelectedUser(user);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

  const handleDelete = (item) =>{
      const id = item._id;
     
      const delete_API = `http://localhost:5000/story/${id}`;

      fetch(delete_API,{method:'DELETE',})
      .then(response=>{
          if(!response.ok){
             throw new Error('Network response was not ok!');
          }
          
          const data = tableData.filter(item => item._id !== id);

          setTableData(data);

          return response.json();
      })
      .then(data=>{
          console.log('Post deleted:', data);
      })
      .catch(error => {
          console.error('Error deleting post:', error);
        });
  }


  const fetchData = async () => {
    try {
      const response = await fetch(get_API);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='manage-post'>
      <h2>Manage Post</h2>
      <div className='manage-table'>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Story</th>
                        <th>Likes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.text}</td>
                            <td>{item.likes}</td>
                            <td className='tableButtons'>
                                <button onClick={() => handleRead(item)} className='read'>Read</button>
                                <button onClick={() => handleDelete(item)}  className='delete'>Delete</button>
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
            <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} userData={selectedUser} />
        </div>
    </div>
  )
};


export default ManagePost