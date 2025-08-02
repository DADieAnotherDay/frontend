import React, { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://backend-services-0s29.onrender.com/render-endpoint", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.text();
    setResponse(data);
  };

  return (
    <div style={ padding: 20 }>
      <h1>AI Grading Frontend</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button type="submit">Send to Backend</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}
