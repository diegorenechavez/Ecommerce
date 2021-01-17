import React from "react"
import ReviewItem from "./review_index_item"

class ReviewIndex extends React.Component { 
    constructor(props) { 
        super(props)
    }
    componentDidMount() { 
        this.props.fetchReviews(this.props.productId)
    }
    render() {
        if (!this.props.reviews.length) return {}
        return (
            <div className="COCK AND BALLS">
        
                {this.props.reviews.map((review, i) => (
                    <h1 key={review.i}>{review.id}</h1>))}
            </div>
        )
    }
}

export default ReviewIndex;