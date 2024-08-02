
import React from 'react';
import '../Css/RequestConfirmationContent.css';

const data = [
    { id: 1, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name' },
    { id: 2, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name' },
    { id: 3, category: 'Electric', items: 'LED TV', quantity: '02', startDate: '27/05/2024', endDate: '28/05/2024', time: '9:00 am -2:00 pm', location: 'Foc, Ground flow, 009 hall', responsibility: 'Dr. Name name' },
];

const RequestConfirmationContent = () => {
    const handleEdit = (id) => {
        console.log(`Edit request with id: ${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Delete request with id: ${id}`);
    };

    return (
        <div className="request-confirmation-content">
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
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.category}</td>
                            <td>{item.items}</td>
                            <td>{item.quantity}</td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                            <td>{item.time}</td>
                            <td>{item.location}</td>
                            <td>{item.responsibility}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(item.id)}>
                                    <span className="icon">✎</span>
                                </button>
                                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                                    <span className="icon">🗑</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="sent-request" style={{ outline: 'none' }}>Sent Request</button>
            
        </div>
    );
};

export default RequestConfirmationContent;
