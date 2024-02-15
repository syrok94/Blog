import React, { useState, useEffect } from 'react'
import Table from './Table'
import './ManagePost.css';



function ManagePost() {


  const [tableData, setTableData] = useState([]);

  const get_API = "http://localhost:5000/story";


  useEffect(() => {
    fetchData();
  }, []);


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

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/story/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Post deleted:', data);
       
        // onDelete(id); // Update UI to remove the deleted post
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
    // // Remove the item with the specified id from the data
    // const updatedData = tableData.filter((item) => item._id !== id);
    // // console.log(_id);
    // setTableData(updatedData);
  };




  return (
    <div className='manage-post'>
      <h2>Manage Post</h2>
      <Table data={tableData} onDelete={handleDelete} />
    </div>
  )
};


export default ManagePost