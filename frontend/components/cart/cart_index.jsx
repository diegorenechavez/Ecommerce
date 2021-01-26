import React from "react";
import { Link} from "react-router-dom"
import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchAllCartItems();
  }
  componentDidUpdate(prevProps) {
    if (this.props.cartItems.length !== prevProps.cartItems.length) { 
      this.props.fetchAllCartItems()
    }
  }

  cartTotal() { 
    let sum = 0
    this.props.cartItems.forEach(cartItem => { 
      sum += (cartItem.price * cartItem.quantity)
    })
    return sum
  }

  render() {
    if (!this.props.cartItems) return null;
    
    return (
      <div className="cart-container">
        <div className="cart-items-wrapper">
          {this.props.cartItems.map((cartItem) => (
            <CartIndexItem
              cartItem={cartItem}
              key={cartItem.id}
              deleteCartItem={this.props.deleteCartItem}
            />
          ))}
        </div>
        <div className="cart-total">Total: ${this.cartTotal()}</div>
        <Link to={`/checkout/${this.props.currentUserId}`}>
          <button className="checkout-button">Checkout</button>
        </Link>
      </div>
    );
  }
}

export default CartIndex;
