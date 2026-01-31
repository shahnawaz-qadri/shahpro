import React, { useState } from 'react';

const JoinHotel = () => {
  const [text, setText] = useState('');

  const handleSubscribe = () => {
    alert(`Subscribed with: ${text}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '80rem',
        borderRadius: '1rem',
        padding: '8rem 1rem',
        margin: '7.5rem auto',
        backgroundColor: '#111827',
        color: 'white',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ fontSize: '50px',marginTop:'-50px',fontFamily:'serif' }}>Stay Inspired</h1>
      <p style={{ fontSize: '20px', color: 'gray', marginBottom: '30px' }}>
        Join our newsletter and be the first to discover new destinations.
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Enter your email"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: '20px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '300px',
            backgroundColor:'rgba(36, 40, 44, 0.64)'
          }}
        />
        <button
          onClick={handleSubscribe}
          style={{
            padding: '10px 28px',
            fontSize: '16px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: 'black',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          Subscribe ➔
        </button>
        </div>
         <p style={{display:'flex',justifyItems:'center',color:'#6B7280',marginTop:'30px'}}>By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
    </div>
  );
};

export default JoinHotel;
