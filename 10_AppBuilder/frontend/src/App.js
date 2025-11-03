import React, { useState } from 'react';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import SignupForm from './SignupForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [aura, setAura] = useState('Radiant');
  const [showSignup, setShowSignup] = useState(true); // Toggle between signup and homepage

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard aura={aura} />
      ) : showSignup ? (
        <SignupForm
          onSignupSuccess={() => {
            setIsLoggedIn(true);
            setShowSignup(false);
          }}
          setAura={setAura}
        />
      ) : (
        <HomePage onLogin={() => setIsLoggedIn(true)} setAura={setAura} />
      )}
    </div>
  );
};

export default App;
