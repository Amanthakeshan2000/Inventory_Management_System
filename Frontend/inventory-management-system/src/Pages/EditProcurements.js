import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProcurement() {
    const { id } = useParams();
    const [procurement, setProcurement] = useState(null);
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [requestedBy, setRequestedBy] = useState('');
    const [requiredByDate, setRequiredByDate] = useState('');
    const [requestDate, setRequestDate] = useState('');
    const [priority, setPriority] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProcurement = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/v1/procurements/procurement/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProcurement(data);
                setItemName(data.itemName);
                setQuantity(data.quantity);
                setRequestedBy(data.requestedBy);
                setRequiredByDate(new Date(data.requiredByDate).toISOString().split('T')[0]);
                setRequestDate(new Date(data.requestDate).toISOString().split('T')[0]);
                setPriority(data.priority);
            } catch (error) {
                console.error('Failed to fetch procurement:', error);
            }
        };

        fetchProcurement();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'itemName':
                setItemName(value);
                break;
            case 'quantity':
                setQuantity(value);
                break;
            case 'requestedBy':
                setRequestedBy(value);
                break;
            case 'requiredByDate':
                setRequiredByDate(value);
                break;
            case 'requestDate':
                setRequestDate(value);
                break;
            case 'priority':
                setPriority(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formattedRequiredByDate = new Date(requiredByDate).toISOString();
        const formattedRequestDate = new Date(requestDate).toISOString();
    
        const requestData = {
            itemName,
            quantity,
            requestedBy,
            requiredByDate: formattedRequiredByDate,
            requestDate: formattedRequestDate,
            priority,
            status: 'PENDING', // Example status; set appropriate value
        };
    
        try {
            const response = await fetch(`http://localhost:8081/api/v1/procurements/procurement/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
            }
    
            const result = await response.json();
            console.log('Procurement updated successfully:', result);
            navigate(`/View-Procurements`); 
        } catch (error) {
            console.error('Failed to update procurement:', error);
            alert(`Failed to update procurement: ${error.message}`);
        }
    };
    
    const handleCancel = () => {
        navigate('/View-Procurements'); // Navigate back to the suppliers list or any other route you prefer
    };
    if (!procurement) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='heading'>
                <p className='heading-request'>
                    Procurement /
                    <section className='heading-create-req'>Edit Procurement</section>
                </p>
            </div>
            <div className="procurement-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-item">
                            <label htmlFor="itemName" className="form-label">Item Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="itemName"
                                name="itemName"
                                value={itemName}
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
                                value={quantity}
                                onChange={handleChange}
                                placeholder="Enter Quantity"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-item">
                            <label htmlFor="requestedBy" className="form-label">Requested By</label>
                            <input
                                type="text"
                                className="form-control"
                                id="requestedBy"
                                name="requestedBy"
                                value={requestedBy}
                                onChange={handleChange}
                                placeholder="Enter Requester's Name"
                                required
                            />
                        </div>

                        <div className="form-item">
                            <label htmlFor="requiredByDate" className="form-label">Required By Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="requiredByDate"
                                name="requiredByDate"
                                value={requiredByDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-item">
                            <label htmlFor="requestDate" className="form-label">Request Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="requestDate"
                                name="requestDate"
                                value={requestDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-item">
                            <label htmlFor="priority" className="form-label">Priority</label>
                            <select
                                className="form-select"
                                id="priority"
                                name="priority"
                                value={priority}
                                onChange={handleChange}
                                required
                            >
                                <option value="LOW">Low</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="HIGH">High</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="headings-button">Save Procurement</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </>
    );
}

export default EditProcurement;
