import React, { useState } from 'react';
import SupApproveReqPopup from '../Components/SupApproveReqPopup';
import ApproveYes from '../Components/ApproveYes';
import RejectNo from '../Components/RejectNo';
import "../Css/sup-approve-req.css"

export default function SupApproveReq() {

    const [isMainPopupOpen, setMainPopupOpen] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [isRejected, setIsRejected] = useState(false);

    const openMainPopup = () => setMainPopupOpen(true);
    const closeMainPopup = () => setMainPopupOpen(false);
    const handleApprove = () => {
        setIsApproved(true);
        setMainPopupOpen(false);
    };
    const handleReject = () => {
        setIsRejected(true);
        setMainPopupOpen(false);
    };

  return (
<div className='buy-approve-request-page'>

<nav className="breadcrumb">
        <span>Buy</span> / <span className="active">Approve the Request</span>
</nav>

    <div className="approve-request">
    
    <div className="request-details">
                <div className="detail">
                    <strong>Requested Date:</strong>
                    <p>2024 January 02</p>
                </div>
                <div className="detail">
                    <strong>Item:</strong>
                    <p>LED TV</p>
                </div>
                <div className="detail">
                    <strong>Quantity:</strong>
                    <p>02</p>
                </div>
                <div className="detail">
                    <strong>Supplier:</strong>
                    <p>ABC Company</p>
                </div>
                <div className='fulviewbtn'><button className="view-button" onClick={openMainPopup}>View</button></div>
              
    </div>

    <SupApproveReqPopup 
                isOpen={isMainPopupOpen} 
                onClose={closeMainPopup} 
                onApprove={handleApprove} 
                onReject={handleReject}
            />
            {isApproved && <ApproveYes message="Approved" onClose={() => setIsApproved(false)} />}
            {isRejected && <RejectNo message="Rejected" onClose={() => setIsRejected(false)} />}

    </div>


</div>

  )
}
