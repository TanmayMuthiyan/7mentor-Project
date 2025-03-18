import React, { useEffect, useState } from 'react';
import './demo2.css';

const TourStatsSection = () => {
  const [users, setUsers] = useState(0);
  const [tours, setTours] = useState(0);
  const [likes, setLikes] = useState(0);
  const [ratings, setRatings] = useState(0);

  // Function to animate numbers
  useEffect(() => {
    let usersInterval = setInterval(() => {
      setUsers((prev) => (prev < 28000 ? prev + 500 : 28000));
    }, 50);

    let toursInterval = setInterval(() => {
      setTours((prev) => (prev < 13000 ? prev + 250 : 13000));
    }, 50);

    let likesInterval = setInterval(() => {
      setLikes((prev) => (prev < 68000 ? prev + 1000 : 68000));
    }, 50);

    let ratingsInterval = setInterval(() => {
      setRatings((prev) => (prev < 10000 ? prev + 200 : 10000));
    }, 50);

    return () => {
      clearInterval(usersInterval);
      clearInterval(toursInterval);
      clearInterval(likesInterval);
      clearInterval(ratingsInterval);
    };
  }, []);

  return (
    <div className="tour-stats-section">
      <div className="stat">
        <div className="icon">👥</div>
        <h2>{users.toLocaleString()}k</h2>
        <p>Total Users</p>
      </div>

      <div className="stat">
        <div className="icon">🗺</div>
        <h2>{tours.toLocaleString()}k</h2>
        <p>Total Tours</p>
      </div>

      <div className="stat">
        <div className="icon">👍</div>
        <h2>{likes.toLocaleString()}k</h2>
        <p>Social Likes</p>
      </div>

      <div className="stat">
        <div className="icon">⭐</div>
        <h2>{ratings.toLocaleString()}k</h2>
        <p>5 Star Ratings</p>
      </div>
    </div>
  );
};

export default TourStatsSection;
