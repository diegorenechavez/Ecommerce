import React from "react";
import { Link } from "react-router-dom"
 
class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      rating: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newReview = this.state
    newReview.product_id = this.props.productId
    this.props.createReview(newReview.product_id, newReview)
    .then(() => this.props.history.push(`/products/${this.props.productId}`))
  }
  
   handleInput(field) {
        return e => this.setState({ [field]: e.target.value })
    }

   handleRating(field) {
        return e => this.setState({ [field]: parseInt(e.target.value) })
    }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId);
  }

  

  render() {
   

    if (!this.props.product) {
      return null;
    }
    return (
      <div className="create-review-container">
        <div className="product-review-info">
          <Link to={`/products/${this.props.productId}`}>
            <img
              className="product-image"
              src={this.props.product.photoUrls[0]}
              alt="product-photo"
            />
            <h1 className="product-name-create">{this.props.product.name}</h1>
          </Link>
        </div>
        <h1 className="review-header -form">Leave A Review</h1>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <div className="rating-container-content">
            <select
              className="select-rating"
              onChange={this.handleRating("rating")}
              id="items"
              placeholder="Select Rating"
            >
              <option value="1">★&nbsp;1</option>
              <option value="2">★&nbsp;2</option>
              <option value="3">★&nbsp;3</option>
              <option value="4">★&nbsp;4</option>
              <option value="5">★&nbsp;5</option>
            </select>

            <input
              className="inputs input-create"
              value={this.state.title}
              onChange={this.handleInput("title")}
              type="text"
              placeholder="Title"
            />
          </div>

          <textarea
            className="body-input"
            value={this.state.body}
            onChange={this.handleInput("body")}
            placeholder="Write Your Review"
          />

          <button className="index-cart-button review-button">
            Submit Review
          </button>
        </form>
      </div>
    );
  }
}

export default CreateReview;
