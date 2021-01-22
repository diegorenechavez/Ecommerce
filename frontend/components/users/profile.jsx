import React from "react";
import { Link } from "react-router-dom";
import UserReviewsContainer from '../reviews/user_reviews_container'

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUserId);
        this.props.fetchAllUserReviews(this.props.currentUserId);
    }


    render(){
        if(!this.props.currentUserId){
            return null
        }
        return(
            <div className="user-profile-container">
                <div className="user-info-container">
                    <div>{this.props.currentUser.name}'s Profile</div>
                    <div>{this.props.currentUser.username}</div>
                    <div>{this.props.currentUser.email}</div>
                </div>
                <div className="user-actions">
                    {/* <Link to={`/users/${this.props.currentUser.id}/update`}>Update Profile</Link> */}
                </div>
                <div className="user-reviews-container">
                    <div>
                        <UserReviewsContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;