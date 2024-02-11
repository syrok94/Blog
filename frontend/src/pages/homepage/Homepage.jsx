import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import postdata from "./postdata"
import "./Homepage.css"
import PostCard from "../../components/postCard/PostCard"

function Homepage() {
  return (
    <div className='homepage'>
      <Navbar />

      <div className='homepage-content'>
        {postdata.map((data, index) => (
          <div className='grid-item'>
          <PostCard
            key={index}
            username={data.username}
            date={data.date}
            text={data.text}
          />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Homepage