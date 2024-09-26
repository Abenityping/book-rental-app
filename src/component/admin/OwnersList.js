// src/components/admin/OwnersList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OwnersList = () => {
    const [owners, setOwners] = useState([]);

    useEffect(() => {
        axios.get('/api/owners')
            .then(response => setOwners(response.data))
            .catch(error => console.error('Error fetching owners:', error));
    }, []);

    const handleApprove = (id) => {
        axios.patch(`/api/owners/${id}/approve`)
            .then(() => setOwners(owners.map(owner => owner.id === id ? { ...owner, status: 'approved' } : owner)));
    };

    const handleDisable = (id) => {
        axios.patch(`/api/owners/${id}/disable`)
            .then(() => setOwners(owners.map(owner => owner.id === id ? { ...owner, status: 'disabled' } : owner)));
    };

    return (
        <div>
            <h2>Manage Owners</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map(owner => (
                        <tr key={owner.id}>
                            <td>{owner.name}</td>
                            <td>{owner.email}</td>
                            <td>{owner.status}</td>
                            <td>
                                {owner.status !== 'approved' && <button onClick={() => handleApprove(owner.id)}>Approve</button>}
                                {owner.status !== 'disabled' && <button onClick={() => handleDisable(owner.id)}>Disable</button>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OwnersList;
