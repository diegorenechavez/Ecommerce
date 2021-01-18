import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header_container";
import ReviewIndex from "../reviews/reviews_index_container";
// import ReviewIndex from "../reviews/reviews_index"

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoFlag: "description",
      liked: false,
    };
    this.setDescription = this.setDescription.bind(this);
    this.setInstructions = this.setInstructions.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
    this.props.fetchReviews(this.props.match.params.productId);
  }

  goBack() {
    this.props.history.goBack();
  }

  likeItem() {
    if (this.state.liked === false) {
      this.setState({ liked: true });
    } else if (this.state.liked) {
      this.setState({ liked: false });
    }
  }

  setDescription() {
    this.setState({ infoFlag: "description" });
  }

  setInstructions() {
    this.setState({ infoFlag: "instructions" });
  }

  render() {
    if (!this.props.product) {
      return null;
    }
    if (!this.props.reviews) {
      return null;
    }
    const { product } = this.props;
    const heart = this.state.liked ? window.fullHeartURL : window.emptyHeartURL;
    const info =
      this.state.infoFlag === "description" ? (
        <h1 className="instruction-text">{this.props.product.description}</h1>
      ) : (
        <h1 className="instruction-text">{this.props.product.instruction}</h1>
      );
    return (
      <div className="product-show-container">
        <div className="back-button-wrapper">
          <button className="back-button" onClick={() => this.goBack()}>
            ⟵{" "}
          </button>
        </div>

        <section className="product-display-container">
          <div className="product-display">
            <div className="product-image-review">
              <img
                className="product-show-image"
                src={product.photoUrls[0]}
                alt=""
              />
              <div className="like-button-container">
                <img
                  onClick={() => this.likeItem()}
                  className="like-button"
                  src={heart}
                  alt=""
                />
              </div>
            </div>
            <div className="product-information">
              <h3 className="product-show-category">{product.category}</h3>
              <h1 className="product-show-name">{product.name}</h1>
              <div className="product-show-right">
                <h4 className="product-show-price">Price: ${product.price} </h4>
                |<h4 className="product-show-size">Size: {product.size}.oz</h4>
              </div>
              <button className="index-cart-button show-cart-button">
                Add To Cart
              </button>
              <hr className="style-7" />
              <div className="free-shipping">
                Free Shipping on Orders over $50
              </div>
              <hr className="style-7" />
            </div>
          </div>
          {/* <div>{info}</div> */}
        </section>

        <section className="product-use-container">
          <div className="toggle-container">
            <button
              className="usage-buttons"
              onClick={() => this.setDescription()}
            >
              Description
            </button>
            <button
              className="usage-buttons"
              onClick={() => this.setInstructions()}
            >
              Instructions
            </button>
            <hr className="des" />
            <div className="instruction">
              {info}
              <img
                className="instruction-image"
                src={product.photoUrls[1]}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* <hr className="style-8"/> */}
        <h2 className="review-header">Reviews</h2>
        <div className="create-review-button">
          <Link to={`/products/${product.id}/review`}>
            <button className="index-cart-button review-button">
              Write A Review
            </button>
          </Link>
        </div>
        <hr className="seperator" />
        <div className="reviews-container">
          <ReviewIndex productId={this.props.product.id} />
        </div>
        <section className="mid-show-page">
          <div className="packagin-container">
            <div className="packaging-blurb">
              <h2 className="packaging-title">
                Things You Should Know About Bubbles Packaging
              </h2>
              We're proud of our packaging-free products, but, we're also proud
              of our packaged products. Reusable, recyclable, biodegradable,
              compostable, and so much more. Our packaging is on a mission to
              reduce ours and your impact on the world.
            </div>
            <img
              className="packaging-picture"
              src={window.packagingURL}
              alt=""
            />
          </div>
          {/* {this.reviews} */}
        </section>
        {/* <ReviewsIndexContainer product={product} /> */}
        {/* <ReviewIndex className="SEE MEEE" reviews={this.props.reviews} fetchReviews={this.props.fetchReviews} productId={this.props.product.id}/> */}
        {/* {console.log(
          <ReviewIndex className="SEE MEEE" reviews={this.props.reviews} />
        )} */}
      </div>
    );
  }
}

export default ProductShow;
