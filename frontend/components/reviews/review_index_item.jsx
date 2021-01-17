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

const ReviewItem = (props) => { 
    if(!props.review) return null
    return (
        <div>
            {console.log(props.review.title)}
            <h1>{props.review.title}</h1>
        </div>
    )
}

export default ReviewItem;