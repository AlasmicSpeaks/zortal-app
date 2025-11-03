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
    background: 'linear-gradient(to right, #1e1e2f, #3f3f5f)',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
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
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#ff6f61',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    color: '#fff'
  }
};

export default WelcomePage;
