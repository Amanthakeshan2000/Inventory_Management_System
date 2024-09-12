import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/viewProcuremets.css';
import { IoTrashBinOutline } from 'react-icons/io5';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import UpperSectionProcurements from '../Components/UpperSectionProcurements';

function ViewProcurements() {
    const [procurements, setProcurements] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProcurements = async () => {
            try {
                const response = await fetch('http://localhost:8081/api/v1/procurements/procurements');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProcurements(data);
            } catch (error) {
                console.error('Failed to fetch procurements:', error);
            }
        };

        fetchProcurements();
    }, []);

    const handleEdit = (id) => {
        navigate(`/Edit-Procurement/${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this procurement request?')) {
            try {
                const response = await fetch(`http://localhost:8081/api/v1/procurements/procurement/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Update UI by filtering out the deleted procurement
                setProcurements(procurements.filter(procurement => procurement.id !== id));
            } catch (error) {
                console.error('Failed to delete procurement:', error);
            }
        }
    };

    return (
        <div className='procurements-main'>
            <div className='heading'>
                <p className='heading-request'>
                    Procurement /
                    <section className='heading-create-req'>View Procurement Requests</section>
                </p>
            </div>
            <UpperSectionProcurements activePage="view-procurements" />
            <div className='procurement-form-container'>
                <div className='procurement-table'>
                    <table>
                        <thead>
                            <tr>
                                <th className='table-heading'>ID</th>
                                <th className='table-heading'>ITEM NAME</th>
                                <th className='table-heading'>QUANTITY</th>
                                <th className='table-heading'>REQUESTED BY</th>
                                <th className='table-heading'>REQUIRED BY DATE</th>
                                <th className='table-heading'>REQUEST DATE</th>
                                <th className='table-heading'>PRIORITY</th>
                                <th className='table-heading'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {procurements.map(procurement => (
                                <tr key={procurement.id}>
                                    <td className='table-element'>{procurement.id}</td>
                                    <td className='table-element'>{procurement.itemName}</td>
                                    <td className='table-element'>{procurement.quantity}</td>
                                    <td className='table-element'>{procurement.requestedBy}</td>
                                    <td className='table-element'>{new Date(procurement.requiredByDate).toLocaleDateString()}</td>
                                    <td className='table-element'>{new Date(procurement.requestDate).toLocaleDateString()}</td>
                                    <td className='table-element'>{procurement.priority}</td>
                                    <td>
                                        <div className="icons-container">
                                            <MdOutlineModeEditOutline
                                                className='choise-icon-edit'
                                                onClick={() => handleEdit(procurement.id)}
                                            />
                                            <IoTrashBinOutline
                                                className='choise-icon'
                                                onClick={() => handleDelete(procurement.id)}
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
    );
}

export default ViewProcurements;
