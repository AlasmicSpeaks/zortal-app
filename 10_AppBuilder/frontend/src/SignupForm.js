import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ onSignupSuccess, setAura }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    aura: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signup', formData);
      alert(res.data.message);
      setAura(formData.aura);        // Pass aura to App
      onSignupSuccess();             // Trigger login flow
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Join ZorTal</h2>
      <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <input name="aura" placeholder="Aura (e.g. Radiant)" value={formData.aura} onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
