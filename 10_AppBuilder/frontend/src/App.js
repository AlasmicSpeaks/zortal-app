import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import HomePage from './HomePage';
import PostFeed from './PostFeed'; // ✅ Updated feed component
import ProfilePage from './ProfilePage';
import CreatePost from './CreatePost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/feed" element={<PostFeed />} /> {/* ✅ Feed route */}
        <Route path="/create-post" element={<CreatePost userId="YOUR_USER_ID" />} />
        <Route path="/profile/:userId" element={<ProfilePage userId="YOUR_USER_ID" />} />
      </Routes>
    </Router>
  );
};

export default App;
