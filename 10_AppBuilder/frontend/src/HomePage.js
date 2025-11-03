import React from 'react';
import Button from './UIComponentLibrary/Button';
import StyleGlyph from './UIComponentLibrary/StyleGlyph';

const HomePage = ({ onLogin, setAura }) => {
  const handleAuraSelect = (selectedAura) => {
    setAura(selectedAura);
    onLogin();
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to ZorTal</h1>
      <p>Choose your Style Aura to begin:</p>
      {['Radiant', 'Dreamy', 'Bold', 'Warm', 'Mystic'].map((aura) => (
        <div key={aura} style={{ margin: '1rem' }}>
          <StyleGlyph aura={aura} />
          <Button label={aura} onClick={() => handleAuraSelect(aura)} styleType="aura" />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
