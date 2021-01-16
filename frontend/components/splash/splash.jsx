import React from "React";
import ProductItem from "../products/product_item"
import Spinner from "../spinner";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() { 
    this.props.fetchAllProducts("featured")
    
  
  }

  render() {
    if (this.props.products.length === null) return null; 
    
    const data = this.props.products[this.props.products.length - 1] ? <div className="section">
      {this.props.products.map((product) => (<ProductItem product={product} key={product.id} />))}
    </div> : <Spinner />
    return (
      <>
        <div className="splash-background">
          <div className="hero-div">
            <div className="message-container">
              <h1 className="banner-message">Welcome</h1>
              <div className="roladex-container">
                <div className="roladex">
                  <div className="words">Babe</div>{" "}
                  <div className="words">Lover</div>
                  <div className="words">Friend</div>
                </div>
              </div>
            </div>

            <h3 className="banner-slogan"> Lets help you unwind</h3>
          </div>
        </div>
        <div className="new-features">
          <h2 className="heading">New Products</h2>
          <hr className="style-six"/>
          {data}
          
        </div>
        <section className="below-the-fold">
          <div className="product-promotion">
            <div className="show-container">
            <img src={window.productURL} alt=""  className="product-image milk-image"/>
              <button className="index-cart-button learn-more-button">Learn More</button>
            </div>
            <div className="product-blurb">
              <h2 className="product-index-name milk">Super Milk</h2>
              <h4 className="product-index-price milk-description">Conditioning Hair Primer</h4>
              Perfect for curls, coils and textured hair, this light, lotion-y leave-in is a great first step in your post-shower routine or can be used as a refresher between washes. Doing the LOC method? This is your first step.
            </div>
            <img src={window.promoURL} alt="" className="promo"/>
          </div>
          <img src={window.footBannerURL} alt="" className="foot-banner" />
          <div className="footer">
            Contact Me | Portfolio | LinkedIn
             <img src={window.meURL} alt="" className="me" />
            
          </div >
        </section>
        
      </>
    );
  }
}
export default Splash;
