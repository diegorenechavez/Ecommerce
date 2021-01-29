import React from 'react'
import LikedItem from "./liked_item"

class LikedItemsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() { 
        this.props.fetchAllLikedItems(this.props.currentUserId)
    }


    render(){
        if(!this.props.likedItems){
            return null
        }
        return (
          <div className="liked-items-container">
                <ul>
                    <h1 className="liked-page-banner">Items You Liked</h1>
                {this.props.likedItems.map((likedItem) => (
                    <LikedItem key={likedItem.id} 
                    removeLikedItem={this.props.removeLikedItem}
                    likedItem={likedItem} />
                ))}
            </ul>
          </div>
        );
    }
}







export default LikedItemsIndex