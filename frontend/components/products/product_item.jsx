import React from 'react'


const ProductItem = (props) => { 
    return (
      <p>
        <div className="dummy-item">{props.product.name}</div>
        <div className="dummy-item">{props.product.price}</div>
      </p>
    );
}


export default ProductItem