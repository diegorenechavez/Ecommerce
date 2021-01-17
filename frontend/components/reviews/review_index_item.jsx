import React from 'react'

class ReviewItem extends React.Component {
    constructor(props) {
        super(props)
    }

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

    render() {
        // if (this.state.loading) {
        //     return <div></div>
        // }
        //   if (!this.props.reviews) {
        //     return null;
        // }
        return (
            <li>
                <div className="reviews">
                    <div className="profile-picture">
                    </div>
                    <div className="review-user-detail">
                        <h3 className="review-username">{this.props.review.user}</h3>
                    </div>
                    <div className="review-content">
                        <div>
                            {/* {this.currentStars()} */}
                        </div>
                        <div className="review-body">
                            {this.props.review.body}
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default ReviewItem;