import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',

    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState({});

    //Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //Handke form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Validation check for passwords
        if (formData.password !== formData.confirmPassword) {
            setErrors({password: "Passwords do not match"});
            return;
        }

        try {
            const response = await axios.post('/api/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,

            });

            //On success, display success message or redirect to login page
            setSuccessMessage("Signup successful! You can now log in.");
            setErrors({});
            setFormData({
                name: '',
                email:'',
                password:'',
                confirmPassword: '',
            });

        } catch (error) {
            //Handle validation errors returned by the server
            if (error.response && error.response.dara) {
                setErrors(error.response.data.errors);

            }
        }

    };

    return (
        <div className="signup-form">
            <h2>Signup</h2>

            {successMessage && <p className="success-message">{successMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>

                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required

                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                    {errors.password && <span className="error">{errors.password}</span>}

                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Pssword</label>
                    <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    />

                </div>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
