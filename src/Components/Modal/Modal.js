import React from 'react';
import Modal from 'react-modal';
import './Modal.css'; // Import the CSS for modal styling
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

const CustomModal = ({ isOpen, handleClose, iframeSrc }) => {
  return (
   
   

    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="AR Modal"
      // className="custom-modal"
      // overlayClassName="custom-modal-overlay"
    >
      {/* <button onClick={handleClose}>Close</button>
      <iframe
        title="AR View"
        src={iframeSrc}
        // width="800"
        // height="600"
        style={{ border: 'none' }}
      ></iframe> */}
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
