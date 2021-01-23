import React from "react";
import { Link } from "react-router-dom";
import UserReviewsContainer from '../reviews/user_reviews_container'
import LikedItemsContainer from '../liked_items/liked_items_container'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderReview: true
        }
        this.renderReviews = this.renderReviews.bind(this)
        this.renderLikedItems = this.renderLikedItems.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId);
        this.props.fetchAllUserReviews(this.props.currentUserId);
    }

    renderReviews(){
        this.setState({renderReview: true});
    }

    renderLikedItems(){
        this.setState({renderReview: false});
    }   


    render(){
        if(!this.props.currentUserId){
            return null
        }

        let profileContent = this.state.renderReview ? <UserReviewsContainer/> : <LikedItemsContainer/>
 
        const selectedReviews = this.state.renderReview ? (
          <button onClick={() => this.renderReviews()}  style={{background: "var(--main-purple)"}}>
            Reviews
          </button>
        ) : (
          <button onClick={() => this.renderReviews()} >
            Reviews
          </button>
            );
        const selectedLikes = !this.state.renderReview ? (
          <button
            onClick={() => this.renderLikedItems()}
            
            style={{ background: "var(--main-purple)" }}
          >
            Liked Items
          </button>
        ) : (
          <button onClick={() => this.renderLikedItems()} >
            Liked Items
          </button>
        );
        return (
          <div className="user-profile-container">
            <img src={window.avatarURL} alt="" className="avatar-image" />
            <div className="user-info-container">
              <div className="user-info-username">
                {this.props.currentUser.username}
              </div>
              <div className="user-info-name">
                {this.props.currentUser.name}'s Profile
              </div>
              <div className="user-info-email">
                email: {this.props.currentUser.email}
              </div>
            </div>
            <div className="user-actions">
              {/* <Link to={`/users/${this.props.currentUser.id}/update`}>Update Profile</Link> */}
            </div>
                <div className="user-options">
                    {selectedReviews}
                    {selectedLikes}
              {/* <button onClick={() => this.renderReviews()} id="review-button">Reviews</button> */}
              {/* <button onClick={() => this.renderLikedItems()} id="liked-button">Liked Items</button> */}
            </div>
            {profileContent}
          </div>
        );
    }
}

export default Profile;