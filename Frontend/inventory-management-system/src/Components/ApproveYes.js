import React from 'react'
import "../Css/approve-yes-popup.css";
import CloseButton from 'react-bootstrap/CloseButton';

export default function ApproveYes({ onClose }) {
    const handleYesClick = () => {
      // Handle the approval logic
      onClose();
    };
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Approve Request</h2>
        <p>Are you sure to Approve this request?</p>
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