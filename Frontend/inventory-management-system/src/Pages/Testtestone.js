import React, { useState } from 'react';
import '../Css/testtestone.css';

// Import the FontAwesome icon
import { FaEye } from 'react-icons/fa';


const personalRequests = [
    { id: 1, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Approved', message: 'Lorem ipsum dolor sit amet consectetur. Suscipit odio semper varius egestas leo nisl urna elementum vitae. Ultrices ante ipsum elementum morbi tincidunt erat elementum. Molestie pulvinar nibh aug' },
    { id: 2, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Pending', message: 'Lorem ipsum dolor sit amet consectetur. Suscipit odio semper varius egestas leo nisl urna elementum vitae. Ultrices ante ipsum elementum morbi tincidunt erat elementum. Molestie pulvinar nibh aug' },
    { id: 3, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Rejected', message: 'Lorem ipsum dolor sit amet consectetur. Suscipit odio semper varius egestas leo nisl urna elementum vitae. Ultrices ante ipsum elementum morbi tincidunt erat elementum. Molestie pulvinar nibh aug' },
];



const Testtestone = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);

    return (
        <div className="">
            <nav className="breadcrumb">
                <span>Request </span> / <span className="active"> Request History</span>
            </nav>
            <br />
            <div className="request-section request-history">

                <table>
                    <thead>
                        <tr>
                            <th>REQUESTED DATE</th>
                            <th>CATEGORY</th>
                            <th>ITEMS</th>
                            <th>NEED DATE</th>
                            <th>QUANTITY</th>
                            <th>SUPPLIER</th>
                            <th>STATUS</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {personalRequests.map((request) => (
                            <React.Fragment key={request.id}>
                                <tr>
                                    <td>{request.startDate}</td>
                                    <td>{request.category}</td>
                                    <td>{request.items}</td>
                                    <td>{request.endDate}</td>
                                    <td>{request.quantity}</td>
                                    <td>Abc company</td>
                                    <td className={`status ${request.status.toLowerCase()}`}>{request.status}</td>
                                    <td><button className="icon-button" onClick={() => setSelectedRequest(request)}>
                                            <FaEye /></button></td>
                                </tr>
                                <tr>
                                    <td colSpan="8"><h6>Message:</h6> {request.message}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
            

        </div>
    );
};

export default Testtestone;
