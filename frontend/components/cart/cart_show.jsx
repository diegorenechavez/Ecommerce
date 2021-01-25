import React from "react";
import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCartItems();
  }
  componentDidUpdate() {}

  cartTotal() {
    let sum = 0;
    this.props.cartItems.forEach((cartItem) => {
      sum += cartItem.price * cartItem.quantity;
    });
    return sum;
  }

  render() {
    if (!this.props.cartItems) return null;

    return (
      <div className="cart-show-container">
        <h1 className="cart-show-header-name">{this.props.currentUser.name}</h1>
        <h2 className="cart-show-header">Review Your Order Details</h2>
        <div className="cart-items-show-wrapper">
          {this.props.cartItems.map((cartItem) => (
            <CartIndexItem
              cartItem={cartItem}
              key={cartItem.id}
              deleteCartItem={this.props.deleteCartItem}
            />
          ))}
        </div>
        <div className="cart-total-show">Total: ${this.cartTotal()}</div>
        <hr className="seperator" />
        <div className="temp-div">
          <h3 className="order-processing-header">Billing Details</h3>
          <form className="payment-form">
            <input type="text" name="" id="" placeholder="First Name"/>
            <input type="text" name="" id="" placeholder="Last Name"/>
            <input type="text" name="" id="" placeholder="Card Number"/>
            <input type="text" name="" id="" placeholder="Exp Date"/>
            <input type="text" name="" id="" placeholder="CVC"/>
          </form>
          <hr className="seperator" />
          <h3 className="order-processing-header">Shipping Details</h3>
         
        </div>
        <button className="checkout-button-show">Place Order</button>
      </div>
    );
  }
}

export default CartIndex;
