import React from 'react';

function Home() {
  return (
    <main className='App'>
      <h2>News Feed</h2>
      <div className="post">
        <h3>John Doe</h3>
        <p>This is a post.</p>
      </div>
      <div className="post">
        <h3>Jane Smith</h3>
        <p>Another post here.</p>
      </div>
    </main>
  );
}

export default Home;
