import React, { useState, useEffect } from 'react';
import UpperSection from '../Components/UpperSection';
import '../Css/viewSupplier.css';
import { IoTrashBinOutline } from "react-icons/io5";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ViewSuppliers() {
    const [suppliers, setSuppliers] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/v1/suppliers/suppliers');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setSuppliers(data);
            } catch (error) {
                console.error('Failed to fetch suppliers:', error);
            }
        };

        fetchSuppliers();
    }, []);

    const handleEdit = (id) => {
        // Redirect to edit page with supplier ID
        navigate(`/edit-supplier/${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this supplier?')) {
            try {
                const response = await fetch(`http://localhost:8081/api/v1/suppliers/supplier/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                // Redirect to a different page or update the UI
                navigate('/view-suppliers');
            } catch (error) {
                console.error('Failed to delete supplier:', error);
            }
        }
    };
    
    return (
        <>
            <div className='procurements-main'>
                <div className='heading'>
                    <p className='heading-request'>
                        Supplier / 
                        <section className='heading-create-req'>View All Suppliers</section>
                    </p>
                </div>
                <UpperSection activePage="view-suppliers" />
                <div className='procurement-form-container'>
                    <div className='supplier-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='table-heading'>ID</th>
                                    <th className='table-heading'>NAME</th>
                                    <th className='table-heading'>EMAIL</th>
                                    <th className='table-heading'>PHONE NUMBER</th>
                                    <th className='table-heading'>ADDRESS</th>
                                    <th className='table-heading'>CITY</th>
                                    <th className='table-heading'>STATE</th>
                                    <th className='table-heading'>POSTAL CODE</th>
                                    <th className='table-heading'>COUNTRY</th>
                                    <th className='table-heading'>STATUS</th>
                                    <th className='table-heading'>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.map(supplier => (
                                    <tr key={supplier.id}>
                                        <td className='table-element'>{supplier.id}</td>
                                        <td className='table-element'>{supplier.name}</td>
                                        <td className='table-element'>{supplier.contactEmail}</td>
                                        <td className='table-element'>{supplier.contactPhone}</td>
                                        <td className='table-element'>{supplier.address}</td>
                                        <td className='table-element'>{supplier.city}</td>
                                        <td className='table-element'>{supplier.state}</td>
                                        <td className='table-element'>{supplier.postalCode}</td>
                                        <td className='table-element'>{supplier.country}</td>
                                        <td className='table-element'>{supplier.status}</td>
                                        <td>
                                            <div className="icons-container">
                                                <MdOutlineModeEditOutline
                                                    className='choise-icon-edit'
                                                    onClick={() => handleEdit(supplier.id)} // Handle edit click
                                                />
                                                <IoTrashBinOutline
                                                    className='choise-icon'
                                                    onClick={() => handleDelete(supplier.id)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewSuppliers;
