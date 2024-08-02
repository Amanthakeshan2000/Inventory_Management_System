import React from 'react';
import '../Css/RequestHistory.css'; // Import the CSS file

const personalRequests = [
    { id: 1, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Pending' },
    { id: 2, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Pending' },
    { id: 3, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Pending' },
];

const nonPersonalRequests = [
    { id: 1, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Approved' },
    { id: 2, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Rejected' },
    { id: 3, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name', status: 'Approved' },
];

const RequestHistory = () => {
    return (


        
        <div className="">
                  <nav className="breadcrumb">
        <span>Request </span> / <span  className="active"  > Request History</span>
      </nav>
      <br/>
            <div className="request-section request-history">
                <h2>Requested date - 2024 May 25 at 8:30 am</h2>
                <h3>Personal Request History</h3>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>CATEGORY</th>
                            <th>ITEMS</th>
                            <th>QUANTITY</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>TIME</th>
                            <th>LOCATION</th>
                            <th>RESPONSIBILITY</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personalRequests.map((request) => (
                            <tr key={request.id}>
                                <td>{request.category}</td>
                                <td>{request.items}</td>
                                <td>{request.quantity}</td>
                                <td>{request.startDate}</td>
                                <td>{request.endDate}</td>
                                <td>{request.time}</td>
                                <td>{request.location}</td>
                                <td>{request.responsibility}</td>
                                <td className={`status ${request.status.toLowerCase()}`}>{request.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
<br/>
            <div className="request-section request-history">
                <h2>Requested date - 2024 April 09 at 8:30 am</h2>
                <h3>Non-Personal Request History</h3>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>CATEGORY</th>
                            <th>ITEMS</th>
                            <th>QUANTITY</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>TIME</th>
                            <th>LOCATION</th>
                            <th>RESPONSIBILITY</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nonPersonalRequests.map((request) => (
                            <tr key={request.id}>
                                <td>{request.category}</td>
                                <td>{request.items}</td>
                                <td>{request.quantity}</td>
                                <td>{request.startDate}</td>
                                <td>{request.endDate}</td>
                                <td>{request.time}</td>
                                <td>{request.location}</td>
                                <td>{request.responsibility}</td>
                                <td className={`status ${request.status.toLowerCase()}`}>{request.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestHistory;
