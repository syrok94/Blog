import React from 'react'
import PostForm from '../../components/post-form/PostForm'
import Navbar from '../../components/navbar/Navbar'
import './ContributePage.css'


function ContributePage() {
  return (
    <div className='contribute-page'>
      <Navbar />
      <div className='cp'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique accusamus doloribus libero perferendis id dolore alias est culpa sequi!</p>
        <p></p>
      </div>
      <div className='cp-content'>
        <div className='cp-instruct'>
          <h2>Tips to contribute : </h2>
          <ul>
            <li>Make the post more fun by picking a creative username!.</li>
            <li>Ensure that no individual's name is included in the story.</li>
            <li>Ensure that no individual's name is included in the story.</li>
          </ul>
        </div>
        <div className='cp-postform'><PostForm /></div>
      </div>
    </div>
  )
}

export default ContributePage