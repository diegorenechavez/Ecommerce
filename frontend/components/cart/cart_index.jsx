import React from "react";
import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCartItems();
  }
  componentDidUpdate() { 
   
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
        <button className="checkout-button">Checkout</button>
      </div>
    );
  }
}

export default CartIndex;
