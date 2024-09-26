import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statistics = () => {
    const [stats, setStats] = useState({});

    useEffect(() => {
        axios.get('/api/admin/statistics')
            .then(response => setStats(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h3>System Statistics</h3>
            <ul>
                <li>Total Books: {stats.total_books}</li>
                <li>Books by Category: {stats.books_by_category?.map(cat => (
                    <span key={cat.category}>{cat.category}: {cat.count}</span>
                ))}</li>
                <li>Books by Status: {stats.books_by_status?.map(status => (
                    <span key={status.status}>{status.status}: {status.count}</span>
                ))}</li>
            </ul>
        </div>
    );
};

export default Statistics;
