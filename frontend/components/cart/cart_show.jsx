import React from "react";
import CartIndexItem from "./cart_index_item";

class CartIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout:false
    }
    this.handleCheckout = this.handleCheckout.bind(this)
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

  handleCheckout() { 
    this.setState({ checkout: true })
    

  }

  close() { 
    this.setState({checkout:false})
  }

  render() {
    const orderConfirmed = this.state.checkout ? <div className="order-confirmation">
      <div className="order-div">
      <div className="order-confirmation-picture" >
        Order Confirmed
      </div>
      <div className="order-confirmation-message">
        <h1 className="order-confirmation-header">
            Thank You {`${this.props.currentUser.name}`}!
        </h1>
          <p className="order-confirmation-blurb" >
            Thank you for ordering with Bubbles, your order is on the way! 
          </p>
          <button className="order-confirmation-button" onClick={()=>this.close()}>Close</button>
      </div>
      </div>
    </div> :(null)
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
            <input className="checkout-inputs"   type="text" name="" id="" placeholder="First Name"/>
            <input  className="checkout-inputs"  type="text" name="" id="" placeholder="Last Name"/>
            <input className="checkout-inputs" id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx"/>
            <input className="checkout-small-inputs" type="text" name="" id="" placeholder="Exp/ Date"/>
            <input className="checkout-small-inputs" type="text" name="" id="" placeholder="CVC"/>
          </form>
          <hr className="seperator" />
          <h3 className="order-processing-header">Shipping Details</h3>
          <form className="payment-form">
            <input className="checkout-inputs" type="text" name="" id="" placeholder="First Name" />
            <input className="checkout-inputs" type="text" name="" id="" placeholder="Last Name" />
            <input className="checkout-inputs" id="ccn" type="tel" placeholder="Street Address" />
            <input className="checkout-small-inputs" type="text" name="" id="" placeholder="Apt Num" />
            <input className="checkout-small-inputs" type="text" name="" id="" placeholder="Country" />
            <input className="checkout-small-inputs" type="text" name="" id="" placeholder="State" />
            <input className="checkout-small-inputs" type="text" name="" id="" placeholder="Zip Code" />
          </form>
         
        </div>
        <button className="checkout-button-show" onClick={() => this.handleCheckout()}>Place Order</button>
        {orderConfirmed}
      </div>
    );
  }
}

export default CartIndex;
