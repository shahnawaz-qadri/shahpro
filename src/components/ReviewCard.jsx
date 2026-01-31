
import React from 'react';

const ReviewCard = ({ name, image, rating, review }) => {
  return (
    <div
      style={{
        borderRadius: 10,
        backgroundColor: 'white',
        width: 400,
        paddingTop: 20,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e2e8f0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img
          src={image}
          alt="profile"
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
        <p style={{ margin: 0, fontWeight: 'bold' }}>{name}</p>
      </div>
      <div style={{ color: '#FFC107', fontSize: 20, fontWeight: 'bold' }}>{rating}</div>
      <p style={{ marginTop: 0 }}>{review}</p>
    </div>
  );
};

export default ReviewCard;
