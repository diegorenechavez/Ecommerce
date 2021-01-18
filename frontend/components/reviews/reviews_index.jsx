import React from "react"
import ReviewIndexItem from "./review_index_item"

class ReviewIndex extends React.Component { 
    constructor(props) { 
        super(props)
    }
    componentDidMount() { 
        this.props.fetchReviews(this.props.productId)
    }
    render() {
        if (!this.props.reviews) return null;
        return (
            <div className="review-index-container">
                <ul>
                    {this.props.reviews.map((review) => (
                    <ReviewIndexItem 
                    key={review.id}
                    review={review}
                    productId={this.props.productId}/>))} 
                </ul>
                
            </div>
        )
    }
}

export default ReviewIndex;