import React, { useState } from 'react'
import './PostForm.css';


function PostForm() {

    const [formData, setFormData] = useState({
        username: '',
        content: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add logic to send data to the backend/API
        console.log('Form submitted:', formData);
        
        // Reset form fields
        setFormData({
            username: '',
            content: '',
        });
    };

    return (
        <div className='post-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
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