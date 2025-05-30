import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
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
    const { username, email, password } = formData;

    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      axios
        .post("http://localhost:4001/register", formData)
        .then((response) => {
          // console.log("register api", response);
          toast(response.data.message);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error sending data: ", error);
        });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="form">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="field-error">{errors.username}</p>
            )}
          </div>

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
            {errors.password && (
              <p className="field-error">{errors.password}</p>
            )}
          </div>

          <button className="form-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
