import React from 'react';
import Card from './UIComponentLibrary/Card';
import PostFeed from './PostFeed';

const Dashboard = ({ aura }) => {
  const quests = [
    { title: 'Post a glyph with joy', content: 'Earn 5 ZorCoin', aura },
    { title: 'Refer a friend', content: 'Earn 10 ZorCoin', aura },
    { title: 'Complete Sorology', content: 'Unlock Aura Shift', aura }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Dashboard</h2>
      {quests.map((q, i) => (
        <Card key={i} title={q.title} content={q.content} aura={q.aura} />
      ))}
      <PostFeed />
    </div>
  );
};

export default Dashboard;
