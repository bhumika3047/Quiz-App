import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform validation here
        const { email, password } = formData;

        let newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form is valid, submit data
            console.log("Form submitted:", formData);
            axios.post('http://localhost:4001/login', formData)
                .then(response => {
                    console.log("login api response", response.data.token);
                    
                    const userLoginToken = response.data.token
                    localStorage.setItem("token", userLoginToken)

                    navigate("/home");
                })
                .catch(error => {
                    console.error("Error sending data: ", error);
                });
            //call api of login
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='form'>
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="field-error">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="field-error">{errors.password}</p>}
                    </div>

                    <button className='form-btn' type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;