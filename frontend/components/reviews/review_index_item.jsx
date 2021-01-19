import React from 'react'



const ReviewIndexItem = (props) => { 
    return (
      <li className="review-wrapper">
        <h1 className="review-title">{props.review.title}</h1>
        <h3 className="review-author">{props.review.username}</h3>
        <h1 className="review-rating">{props.review.rating}/5&nbsp;★</h1>
        <p className="review-body">{props.review.body}</p>
      </li>
    );
}

export default ReviewIndexItem