import React from 'react';
import Title from './Title';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: 'Emma Rodriguez',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    rating: '★★★★★',
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides.",
  },
  {
    name: 'Liam Johnson',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: '★★★★☆',
    review:
      "QuickStay has made traveling so much easier. The interface is user-friendly, and the customer service is excellent.",
  },
  {
    name: 'Sophia Patel',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: '★★★★★',
    review:
      "From booking to check-out, everything was seamless. Highly recommend QuickStay for luxury travel.",
  },
  {
    name: 'Noah Smith',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: '★★★☆☆',
    review:
      "Good options but wish there were more filters. Still better than most platforms out there.",
  },
];

const CustumerRating = () => {
  return (
    <div style={{ padding: 20, paddingTop: 100,paddingBottom:100, backgroundColor: '#f8fafc' }}>
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
      />
      <div style={{ width: '100%', marginTop: 10, marginLeft: 100, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            image={review.image}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>
    </div>
  );
};

export default CustumerRating;
