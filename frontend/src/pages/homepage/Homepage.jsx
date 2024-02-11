import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import postdata from "./postdata"
import "./Homepage.css"
import PostCard from "../../components/postCard/PostCard"

function Homepage() {

  const getAllData_API = "http://localhost//story";

  return (
    <div className='homepage'>
      
      <Navbar />

      fetch(getAllData_API)
        .then(response => {

          if(!response.ok){
            throw new Error("network response was not ok");
          }

          return response.json();

        })
        .then(data=>{
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
        })
        .catch(error => {
          console.error("there was a problem with fetch opereation" , error);
        })

      
    </div>
  )
}

export default Homepage