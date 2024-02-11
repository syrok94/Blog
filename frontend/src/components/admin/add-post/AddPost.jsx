import React, { useState } from 'react';
import './AddPost.css';
import ModalComponent from '../modal/Modal';


const AddPost = () => {
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


    const [data, setData] = useState([
        { id: 1, username: 'JohnDoe', story: 'sadsdasdasdadasdasdasdasdsadad  ipsum...', },
        { id: 2, username: 'JaneDoe', story: 'Dolor sfasdasdasdit amet...', },
        { id: 3, username: 'JaneDoe', story: 'Dolor sit amet...', },
       
    ]);

    const handleDelete = (id) => {
        // Implement logic to delete the item with the given id
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    const handleAdd = () => {
        // Generate random data for the new user
        const newId = data.length + 1;
        const newUsername = `User${newId}`;
        const newStory = 'New user story...';

        // Update the state to include the new user
        setData([...data, { id: newId, username: newUsername, story: newStory }]);
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    const handleRead = (user) => {
        setSelectedUser(user);
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };

    return (
        <div className="AddPost">
            <h2>Add New Post</h2>
            <div className="AddPost-container">
                <div className='AddPostList'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Username</th>
                                {/* <th>Story</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    {/* <td>{user.story}</td> */}
                                    <td className='addpostbuttons'>
                                        <button onClick={() => handleRead(user)} className='read'>Read</button>
                                        <button onClick={handleAdd} className='add'>Add</button>
                                        <button onClick={() => handleDelete(user.id)} className='delete'>Delete</button>
                                        {/* Add button for editing here if needed */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} userData={selectedUser} />
                </div>
                <div className='AddPostForm'>
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

                        <button type="submit">Add Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPost;
