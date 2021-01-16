import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductItem = (props) => {
  const photo = props.product.photoUrls.length
    ? props.product.photoUrls[0]
    : null;
  const [picture, setPicture] = useState(photo);
  const pictureChange = () => {
    setPicture(props.product.photoUrls[1]);
  };

  const defaultPicture = () => {
    setPicture(props.product.photoUrls[0]);
  };

  return (
    <div className="featured">
      <div className="product">
        <Link to={`/products/${props.product.id}`}>
          <img
            className="product-image"
            src={picture}
            alt=""
            onMouseEnter={pictureChange}
            onMouseLeave={defaultPicture}
          />
        </Link>
        <div className="item-details">
          <h3 className="product-index-name">{props.product.name}</h3>
          <h4 className="product-index-price">
            ${props.product.price}.00 |{" "}
            <em id="index-size">{props.product.size}.oz</em>{" "}
          </h4>
        </div>
        <button className="index-cart-button">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
