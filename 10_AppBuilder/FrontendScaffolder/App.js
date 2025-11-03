import React, { useState } from 'react';
import HomePage from './HomePage';
import Dashboard from './Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [aura, setAura] = useState('Radiant');

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard aura={aura} />
      ) : (
        <HomePage onLogin={() => setIsLoggedIn(true)} setAura={setAura} />
      )}
    </div>
  );
};

export default App;
