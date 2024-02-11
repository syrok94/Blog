import React from 'react'
import Navbar from '../../components/navbar/Navbar'
// import postdata from "./postdata"

import { useState , useEffect } from 'react';

import "./Homepage.css"
import PostCard from "../../components/postCard/PostCard"

function Homepage() {
  
  const get_API = "http://localhost:5000/story";

  const [allData , setdata] = useState([]);

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
            setdata(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (
    <div className='homepage'>
      <Navbar />

      <div className='homepage-content'>
        {allData.map((data, index) => (
          <div className='grid-item'>
          <PostCard
            key={index}
            username={data.name}
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