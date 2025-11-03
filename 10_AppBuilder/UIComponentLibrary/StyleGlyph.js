import React from 'react';

const StyleGlyph = ({ aura }) => {
  const glyphs = {
    Radiant: '🌟',
    Dreamy: '🌙',
    Bold: '⚡',
    Warm: '🌸',
    Mystic: '🔮'
  };

  return (
    <span style={{ fontSize: '2rem', marginRight: '0.5rem' }}>
      {glyphs[aura] || '✨'}
    </span>
  );
};

export default StyleGlyph;
