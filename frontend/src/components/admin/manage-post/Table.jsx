import React , {useState} from 'react'
import './Table.css';
import ModalComponent from '../modal/Modal';


const Table = ({ data, onDelete }) => {

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
        <div className='manage-table'>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Story</th>
                        <th>Likes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.story}</td>
                            <td>{item.likes}</td>
                            <td className='tableButtons'>
                                <button onClick={() => handleRead(item)} className='read'>Read</button>
                                <button onClick={() => onDelete(item.id)} className='delete'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} userData={selectedUser} />
        </div>

    );
};

export default Table