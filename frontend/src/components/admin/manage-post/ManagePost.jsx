import React , {useState} from 'react'
import Table from './Table'
import './ManagePost.css';

const initialData = [
    { id: 1, username: 'User1', story: 'Story 1', likes: 10 },
    { id: 2, username: 'User2', story: 'Story 2', likes: 20 },
    { id: 3, username: 'User3', story: 'Story 3', likes: 30 },
  ];

function ManagePost() {

  const [tableData, setTableData] = useState(initialData);

  const handleDelete = (id) => {
    // Remove the item with the specified id from the data
    const updatedData = tableData.filter((item) => item.id !== id);
    setTableData(updatedData);
  };


  return (
    <div className='manage-post'>
        <h2>Manage Post</h2>
        <Table data={tableData} onDelete={handleDelete} />
    </div>
  )
}

export default ManagePost