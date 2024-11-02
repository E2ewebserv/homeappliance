import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const submitReview = async (e) => {
    e.preventDefault();
    const newReview = { name, review };
    try {
      const response = await axios.post('http://localhost:3000/submit-review', newReview);
      console.log('Review submitted:', response.data);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <form onSubmit={submitReview}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
