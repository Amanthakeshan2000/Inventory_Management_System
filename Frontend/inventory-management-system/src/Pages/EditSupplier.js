import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Css/editSupplier.css';

function EditSupplier() {
    const { id } = useParams();
    const [supplier, setSupplier] = useState(null);
    const [name, setName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/v1/suppliers/supplier/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSupplier(data);
                setName(data.name);
                setContactEmail(data.contactEmail);
                setContactPhone(data.contactPhone);
                setAddress(data.address);
                setCity(data.city);
                setState(data.state);
                setPostalCode(data.postalCode);
                setCountry(data.country);
                setStatus(data.status);
            } catch (error) {
                console.error('Failed to fetch supplier:', error);
            }
        };

        fetchSupplier();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'contactEmail':
                setContactEmail(value);
                break;
            case 'contactPhone':
                setContactPhone(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'city':
                setCity(value);
                break;
            case 'state':
                setState(value);
                break;
            case 'postalCode':
                setPostalCode(value);
                break;
            case 'country':
                setCountry(value);
                break;
            case 'status':
                setStatus(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct the URL for updating a specific supplier
    const url = `http://localhost:8081/api/v1/suppliers/supplier/${id}`;

    const updatedSupplier = {
        name,
        contactEmail,
        contactPhone,
        address,
        city,
        state,
        postalCode,
        country,
        status,
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedSupplier),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        navigate('/view-suppliers');
    } catch (error) {
        console.error('Failed to update supplier:', error);
    }
};


    if (!supplier) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className='heading'>
                    <p className='heading-request'>
                        Supplier / 
                        <section className='heading-create-req'>Edit Supplier</section>
                    </p>
                </div>
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
                            value={name}
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
                            value={contactEmail}
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
                            value={contactPhone}
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
                            value={status}
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
                            value={address}
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
                            value={city}
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
                            value={state}
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
                            value={postalCode}
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
                            value={country}
                            onChange={handleChange}
                            placeholder="Enter Supplier's Country"
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="headings-button">Save Supplier</button>
            </form>
            </div>
            </>
    );
}

export default EditSupplier;
