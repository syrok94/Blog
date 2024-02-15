import React , {useState} from 'react'
import './Table.css';
import ModalComponent from '../modal/Modal';


const Table = ({ data }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

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

            return response.json();
        })
        .then(data=>{
            console.log('Post deleted:', data);
        })
        .catch(error => {
            console.error('Error deleting post:', error);
          });
    }

    return (
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
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.text}</td>
                            <td>{item.likes}</td>
                            <td className='tableButtons'>
                                <button onClick={() => handleRead(item)} className='read'>Read</button>
                                <button onClick={() => handleDelete(item)} className='delete'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} userData={selectedUser} />
        </div>

    );
};

export default Table