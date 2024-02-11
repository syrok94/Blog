import React from 'react'
import "./AddPostPage.css"


import AddPost from '../../../components/admin/add-post/AddPost'
import AdminNavbar from '../../../components/admin/admin-navbar/AdminNavbar'

function AddPostPage() {
  return (
    <div className='addpostpage'>
      <AdminNavbar/>
      <AddPost />
    </div>
    
  )
}

export default AddPostPage