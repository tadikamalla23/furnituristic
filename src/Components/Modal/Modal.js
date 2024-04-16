import React from 'react';
import Modal from 'react-modal';
import './Modal.css'; // Import the CSS for modal styling

const CustomModal = ({ isOpen, handleClose, iframeSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="AR Modal"
    >
        <div className="modal-content">
        <div className="close-button" onClick={handleClose}></div>
        <h2>AR View</h2>
        <iframe
          title="AR View"
          src={iframeSrc}
          height="550"
          className="modal-iframe"
          style={{ border: 'none' }}
        ></iframe>
       </div>
     </Modal>
  );
};

export default CustomModal;