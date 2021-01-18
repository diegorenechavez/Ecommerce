import React from 'react'

// class ReviewItem extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    // currentStars() {
    //     return (
    //         <div className="starRating-current">
    //             {[...Array(5)].map((star, i) => {
    //                 return (
    //                     // <div>
    //                     <i className="fas fa-star"
    //                         key={i}
    //                         id={i + 1 <= this.props.review.rating ? "checked" : "notChecked"}>
    //                     </i>
    //                     // </div>
    //                 )
    //             })}
    //         </div>
    //     )
    // }

    // render() {
    //     // if (this.state.loading) {
    //     //     return <div></div>
    //     // }
    //       if (!this.props.reviews) {
    //         return null;
    //     }
    //     return (
    //         <div>
    //             <h1>{this.props.review.title}</h1>
    //         </div>
    //     )
    // }
// }

const ReviewIndexItem = (props) => { 
    return (
      <li className="review-wrapper">
        <h1 className="review-title">{props.review.title}</h1>
        <h3 className="review-author">{props.review.username}</h3>
        <h1 className="review-rating">{props.review.rating}/5</h1>
        <p className="review-body">{props.review.body}</p>
      </li>
    );
}

export default ReviewIndexItem