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
    const data = this.props.products[this.props.products.length - 1] ? <section>
      {this.props.products.map((product) => (<ProductItem product={product} />))}
    </section> : <Spinner />
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
          {data}
          
        </div>
      </>
    );
  }
}
export default Splash;
