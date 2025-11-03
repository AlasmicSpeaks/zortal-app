import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [aura, setAura] = useState('Radiant');
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard aura={aura} />
      ) : showSignup ? (
        <SignupForm
          onSignupSuccess={() => setIsLoggedIn(true)}
          setAura={setAura}
        />
      ) : (
        <WelcomePage onJoin={() => setShowSignup(true)} />
      )}
    </div>
  );
};

export default App;
