import React from 'react';

const Button = ({ label, onClick, styleType = 'primary' }) => {
  const styles = {
    primary: { backgroundColor: '#6C63FF', color: '#fff' },
    secondary: { backgroundColor: '#f0f0f0', color: '#333' },
    aura: { backgroundColor: '#FFD700', color: '#000' }
  };

  return (
    <button style={styles[styleType]} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
