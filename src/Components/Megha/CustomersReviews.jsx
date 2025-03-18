import React, { useState } from "react";

const CustomersReviews = () => {
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [review, setReview] = useState(""); // State to store current input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      // Add review to the list
      setReviews([...reviews, review]);
      setReview(""); // Clear the input
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Customer Reviews</h2>
      {/* Review Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          rows="4"
          style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginTop: "10px",
            background: "#34d399",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              style={{
                background: "#f4f4f4",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              {review}
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave one!</p>
        )}
      </div>
    </div>
  );
};

export default CustomersReviews;
