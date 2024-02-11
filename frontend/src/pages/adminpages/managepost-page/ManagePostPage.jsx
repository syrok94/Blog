import React from 'react'
import "./ManagePostPage.css"
import ManagePost from '../../../components/admin/manage-post/ManagePost'
import AdminNavbar from '../../../components/admin/admin-navbar/AdminNavbar'

function ManagePostPage() {
  

  return (
    <div className='managepostpage'>
      <AdminNavbar/>
      <ManagePost />
    </div>
  )
}

export default ManagePostPage