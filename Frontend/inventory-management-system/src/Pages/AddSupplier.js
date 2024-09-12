import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Css/addSupplier.css';
import UpperSection from '../Components/UpperSection';

function AddSupplier() {
    const [formData, setFormData] = useState({
        name: '',
        contactEmail: '',
        contactPhone: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        status: 'ACTIVE', // Default status is ACTIVE
        priority: 'LOW',  // Default priority is LOW
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8081/api/v1/suppliers/supplier', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Redirect to a different page upon successful submission
            navigate('/view-suppliers');
        } catch (error) {
            console.error('Failed to save supplier:', error);
        }
    };

    return (
        <>
            <div className='procurements-main'>
                <div className='heading'>
                    <p className='heading-request'>
                        Supplier / <section className='heading-create-req'>Add Supplier</section>
                    </p>
                </div>
                {/* Upper section with buttons */}
                <UpperSection activePage="add-supplier" />

                {/* Form to add supplier */}
                <div className="procurement-form-container">
                    <form onSubmit={handleSubmit}>
                        {/* Supplier Information */}
                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Supplier Name"
                                    required
                                />
                            </div>

                            <div className="form-item">
                                <label htmlFor="contactEmail" className="form-label">Contact Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="contactEmail"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    placeholder="Enter Supplier's Contact Email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="contactPhone" className="form-label">Contact Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="contactPhone"
                                    name="contactPhone"
                                    value={formData.contactPhone}
                                    onChange={handleChange}
                                    placeholder="Enter Supplier's Contact Phone"
                                    required
                                />
                            </div>

                            <div className="form-item">
                                <label htmlFor="status" className="form-label">Status</label>
                                <select
                                    className="form-select"
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="ACTIVE">Active</option>
                                    <option value="INACTIVE">Inactive</option>
                                </select>
                            </div>
                        </div>

                        {/* Address Information */}
                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter Supplier's Address"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="city" className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Enter Supplier's City"
                                    required
                                />
                            </div>

                            <div className="form-item">
                                <label htmlFor="state" className="form-label">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    placeholder="Enter Supplier's State"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-item">
                                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="postalCode"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    placeholder="Enter Supplier's Postal Code"
                                    required
                                />
                            </div>

                            <div className="form-item">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    placeholder="Enter Supplier's Country"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="headings-button">Save Supplier</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddSupplier;
