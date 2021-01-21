import React from "react";
import { Link } from "react-router-dom";


const CartIndexItem = (props) => {
  if (!props.cartItem.photoUrls) return null;
  return (
    <div className="cart-item">
      <Link to={`/products/${props.cartItem.productId}`}>
        <img className="cart-item-picture" src={props.cartItem.photoUrls[0]} />
      </Link>
      <div className="cart-item-info">
        <div className="cart-item-name">{props.cartItem.name}</div>
        <div className="cart-item-specs">
          <div className="cart-item-price">${props.cartItem.price}&nbsp;</div>&nbsp;|&nbsp;
          <div className="cart-item-size">{props.cartItem.size}oz</div>
          <button
            className="cart-item-remove-button "
            onClick={() => props.deleteCartItem(props.cartItem.cartItemId)}
          >
            Remove
          </button>
        </div>
          <div>Qty:&nbsp;{props.cartItem.quantity}</div>
        
      </div>
    </div>
  );
};

export default CartIndexItem;
