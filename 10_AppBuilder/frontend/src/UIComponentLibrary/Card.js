import React from 'react';

const Card = ({ title, content, aura }) => {
  const auraColors = {
    Radiant: '#FF69B4',
    Dreamy: '#9370DB',
    Bold: '#FF4500',
    Warm: '#FFA07A',
    Mystic: '#20B2AA'
  };

  return (
    <div style={{
      border: `2px solid ${auraColors[aura] || '#ccc'}`,
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1rem'
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
