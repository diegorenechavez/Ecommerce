import React from 'react'
import UserReviewIndexItem from './user_reviews_index_item'

class UserReviewsIndex extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.fetchAllUserReviews(this.props.currentUserId)
    }

    render(){
        if(!this.props.reviews){
            return null
        }
        return (
            <div className="user-review-index-container">
                <ul>
                    {this.props.reviews.map((review) => (
                    <UserReviewIndexItem 
                    key={review.id}
                    review={review}
                    removeReview={this.props.removeReview}
                    productId={this.props.productId}/>))} 
                </ul>
                
            </div>
        )
    }
}

export default UserReviewsIndex;