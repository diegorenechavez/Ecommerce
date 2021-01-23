import {connect} from 'react-redux'
import LikedItemsIndex from "./liked_items_index"
import { fetchAllLikedItems, createLikedItem, removeLikedItem} from "../../actions/liked_item_actions"


const mapStateToProps = (state) => { 
    return {
        currentUserId: state.session.currentUser,
        likedItems: Object.values(state.entities.likedItems)
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        fetchAllLikedItems: (userId) => dispatch(fetchAllLikedItems(userId)),
        removeLikedItem: (likedItemId) => dispatch(removeLikedItem(likedItemId))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LikedItemsIndex)