import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/api/admin/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error(error));
    }, []);

    const approveBook = (id) => {
        axios.put(`/api/admin/books/${id}/approve`)
            .then(() => {
                setBooks(books.map(book =>
                    book.id === id ? { ...book, status: 'approved' } : book
                ));
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h3>Books</h3>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.title} - {book.status}
                        {book.status === 'pending' && (
                            <button onClick={() => approveBook(book.id)}>Approve</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
