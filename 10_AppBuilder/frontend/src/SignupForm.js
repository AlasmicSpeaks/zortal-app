import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signup', formData);
      alert(res.data.message);
      onSignupSuccess();
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Create Your ZorTal Account</h2>
        <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required style={styles.input} />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input} />
        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={styles.input} />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundImage: 'url("/zortal-bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    maxWidth: '400px',
    fontFamily: 'Segoe UI, sans-serif',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  input: {
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1rem'
  },
  button: {
    padding: '0.8rem',
    fontSize: '1rem',
    backgroundColor: '#ff6f61',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    color: '#fff',
    fontWeight: 'normal',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease'
  }
};

export default SignupForm;
