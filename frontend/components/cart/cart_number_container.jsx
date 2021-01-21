import { connect } from "react-redux";
import {
  fetchAllCartItems,
  deleteCartItem,
} from "../../actions/cart_item_actions";
import CartNumber from "./cart_number"


const mapStateToProps = (state) => { 
    return {
        cartItems: Object.values(state.entities.cartItems)
    }

}

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchAllCartItems: () => dispatch(fetchAllCartItems())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CartNumber)