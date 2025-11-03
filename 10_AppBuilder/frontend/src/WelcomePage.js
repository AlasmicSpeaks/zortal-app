import React from 'react';

const WelcomePage = ({ onJoin }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.logo}>ZorTal</h1>
      <p style={styles.tagline}>The Trending Portal</p>
      <button style={styles.button} onClick={onJoin}>
        Join Now
      </button>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundImage: 'url("/zortal-bg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
    padding: '2rem'
  },
  logo: {
    fontSize: '4rem',
    marginBottom: '0.5rem',
    letterSpacing: '2px'
  },
  tagline: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    fontStyle: 'italic'
  },
  button: {
    padding: '0.8rem 1.6rem',
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

export default WelcomePage;
