import Hair from './hair';
import { connect } from 'react-redux'
import { fetchAllProducts } from '../../actions/product_actions';
import { createCartItem} from "../../actions/cart_item_actions"

const mapStateToProps = (state, ownProps) => { 
    return {
      products: Object.values(state.entities.products),
      currentUserId: state.session.currentUser,
    };
}


const mapDispatchToProps = dispatch => { 
    return {
        fetchAllProducts: (category) => { dispatch(fetchAllProducts(category)) },
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hair)