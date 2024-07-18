import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const SignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register/admin', {
        username,
        password,
        confirm_password: confirmPassword,
      });

      if (response.status === 200) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='add-admin-wrapper'>
    <div className="add-admin-container">
      <h2>Add Admin</h2>
      <form onSubmit={SignUp} className="add-admin-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddAdmin;
