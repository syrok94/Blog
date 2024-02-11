// Modal.js

import React from 'react';
import './Modal.css'
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, closeModal, userData }) => {
  return (
    <Modal
    className="Modal"
    overlayClassName="Overlay"
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="User Details"
    >
      <div>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>User Details</h2>
        <p><strong>Username:</strong> {userData.name}</p>
        <p><strong>Text:</strong> {userData.text}</p>
      </div>
    </Modal>
  );
};

export default ModalComponent;
