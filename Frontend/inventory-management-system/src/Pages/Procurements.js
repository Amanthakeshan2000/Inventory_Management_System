import React, { useState } from 'react';
import '../Css/procurements.css';
import UpperSectionProcurements from '../Components/UpperSectionProcurements';
import { useNavigate } from 'react-router-dom';

function Procurements() {
    const [formData, setFormData] = useState({
        itemName: '',
        quantity: '',
        requestedBy: '',
        requiredByDate: '',
        requiredTime: '',
        priority: 'LOW',
    });

    const navigate = useNavigate();

    // Initialize form visibility as true to display it by default
    const [showForm, setShowForm] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Construct the form data
        const formData = {
            itemName: e.target.itemName.value,
            quantity: parseInt(e.target.quantity.value, 10),
            requestedBy: parseInt(e.target.requestedBy.value, 10),
            requestDate: new Date().toISOString(), // or format as needed
            requiredByDate: `${e.target.requiredByDate.value}T${e.target.requiredTime.value}:00`,
            priority: e.target.priority.value,
            status: 'PENDING',
            approvalDate: null,
            approvedBy: null,
            supplierId: null
        };

        try {
            const response = await fetch('http://localhost:8081/api/v1/procurements/procurement', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server responded with an error:', errorData);
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);

            // Redirect to the view page after successful submission
            navigate('/View-Procurements'); 

        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };
    
    

    return (
        <div className='procurements-main'>
            <div className='heading'>
                <p className='heading-request'>
                Procurement / <span className='heading-create-req'>Add Procurement</span>
                </p>
            </div>

            {/* Upper section with buttons */}
            <UpperSectionProcurements activePage="add-procurement" />

            {/* Conditionally render the form */}
            {showForm && (
                <div className="procurement-form-container">
                    <form onSubmit={handleSubmit}>
                        {/* Item Information */}
                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="itemName" className="form-label">Item Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="itemName"
                                    name="itemName"
                                    value={formData.itemName}
                                    onChange={handleChange}
                                    placeholder="Enter Item Name"
                                    required
                                />
                            </div>

                            <div className="form-item">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    placeholder="Enter Quantity"
                                    required
                                />
                            </div>
                        </div>

                        {/* Requestor Information */}
                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="requestedBy" className="form-label">Requested By</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="requestedBy"
                                    name="requestedBy"
                                    value={formData.requestedBy}
                                    onChange={handleChange}
                                    placeholder="Enter Requestor ID"
                                    required
                                />
                            </div>

                            <div className="form-item">
                                <label htmlFor="priority" className="form-label">Priority</label>
                                <select
                                    className="form-select"
                                    id="priority"
                                    name="priority"
                                    value={formData.priority}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="LOW">Low</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="HIGH">High</option>
                                </select>
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="requiredByDate" className="form-label">Required By Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="requiredByDate"
                                    name="requiredByDate"
                                    value={formData.requiredByDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-item">
                                <label htmlFor="requiredTime" className="form-label">Required By Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="requiredTime"
                                    name="requiredTime"
                                    value={formData.requiredTime}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="headings-button">Save Request</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Procurements;
