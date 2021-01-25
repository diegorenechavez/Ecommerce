import React from "react";
import ProductItem from "./product_item";
import Spinner from "../spinner"

class Face extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   this.props.fetchAllProducts("face");
  // }

  // render() {
  //   return (
  //     <div>
  //       <div className="splash-background">
  //         <div className="face">
  //           <div className="message-container">
  //             <h1 className="banner-message">For</h1>
  //             <div className="roladex-container">
  //               <div className="word-container">
  //                 <div className="words one">Face</div>{" "}
  //               </div>
  //             </div>
  //           </div>

  //           <h3 className="banner-slogan"></h3>
  //         </div>
  //       </div>

  //       {this.props.products.map((product) => (
  //         <ProductItem product={product} key={product.id}/>
  //       ))}
  //     </div>
  //   );
  // }
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts("face");
  }

  render() {
    const display = this.props.products[this.props.products.length - 1] ? (
      <div className="product-index">
        {this.props.products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            createCartItem={this.props.createCartItem}
            currentUserId={this.props.currentUserId}
          />
        ))}
      </div>
    ) : (
      <div className="spinner-container">
        <Spinner />
      </div>
    );
    return (
      <div>
        <div className="splash-background">
          <div className="face">
            <div className="message-container">
              <h1 className="banner-message">For</h1>
              <div className="roladex-container">
                <div className="word-container">
                  <div className="words one for-product">Face</div>{" "}
                </div>
              </div>
            </div>

            <h3 className="banner-slogan"></h3>
          </div>
        </div>
        {/* <div className="product-index">
          {this.props.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div> */}
        <div className="bubbles-slogan">Lets Help You Unwind</div>
        {display}
      </div>
    );
  }
}

export default Face;
