import React from "react";


class UserReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e){
        e.preventDefault();
        this.props.removeReview(this.props.review.id)
    }

    render(){
        if(!this.props.review){
            return null
        }
        return (
            <li className="review-wrapper">
                <h1 className="review-title">{this.props.review.title}</h1>
                <h3 className="review-author">{this.props.review.username}</h3>
                <h1 className="review-rating">{this.props.review.rating}/5 </h1>
                <p className="review-body">{this.props.review.body}</p>
                <button onClick={this.handleDelete} className="cart-item-remove-button review-button2">Delete</button>
            </li>
        );
    }
}

export default UserReviewIndexItem