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

  return (
    <div className='manage-post'>
      <h2>Manage Post</h2>
      <Table data={tableData}  />
    </div>
  )
};


export default ManagePost