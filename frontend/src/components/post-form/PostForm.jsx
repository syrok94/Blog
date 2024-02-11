import React, { useState } from 'react'
import './PostForm.css';


function PostForm() {

    const post_API = "http://localhost:5000/story";

    const [formData, setFormData] = useState({
        name: '',
        text: '',
    });



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const  handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const  response = await fetch(post_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to add item');
            }
            setFormData({
                name: '',
                text: '',
            });
            
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className='post-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="content">Content:</label>
                <textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>

                <button type="submit">ADD POST</button>
            </form>
        </div>
    )
}


export default PostForm