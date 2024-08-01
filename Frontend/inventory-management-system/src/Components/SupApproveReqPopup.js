import React from 'react'
import "../Css/sup-approve-popup.css";
import CloseButton from 'react-bootstrap/CloseButton';

export default function SupApproveReqPopup({ isOpen, onClose, onApprove, onReject }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}><CloseButton /></button>
                <h2>Category & Items</h2>
                <div className="form-group">
                    <label>Select category</label>
                    <p>Electric</p>
                </div>
                <div className="form-group">
                    <label>Select items</label>
                    <p>LED TV</p>
                </div>
                <div className="form-group">
                    <label>Description (0 / 1000)</label>
                    <p>Enter description for reason</p>
                </div>
                <div className="form-group">
                    <label>Request date</label>
                    <p>27 May 2024</p>
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <p>02</p>
                </div>
                <div className="form-group">
                    <label>Supplier</label>
                    <div className="supplier-info">
                        <p>ABC Company</p>
                        <p>011 5363536</p>
                    </div>
                </div>
                <div className="modal-actions">
                    <button onClick={onReject} className="reject-button">Reject</button>
                    <button onClick={onApprove} className="approve-button">Approve</button>
                </div>
            </div>
        </div>
    );
}