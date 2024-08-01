import React from 'react'
import "../Css/reject-no-popup.css";
import CloseButton from 'react-bootstrap/CloseButton';

export default function RejectNo({ onClose }) {
    const handleYesClick = () => {
        // Handle the approval logic
        onClose();
      };
    return (
      <div className="popup-overlay">
        <div className="popup-content2">
          <h2>Reject Request</h2>
          <p>Are you sure to Reject this request?</p>
          <textarea className='resonmsg' placeholder="Enter your message here..."></textarea>
          <div className="buttons">
            <button className='btnno' onClick={onClose}>No</button>
            <button className='btnyes' onClick={handleYesClick}>Yes</button>
          </div>
          <button className="close" onClick={onClose}><CloseButton /></button>
        </div>
      </div>
    );
  }