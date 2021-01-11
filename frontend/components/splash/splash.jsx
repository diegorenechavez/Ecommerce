import React from "React";
import ProductItem from "../products/product_item"

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
    this.props.fetchAllProducts("featured")
  }

  render() {
    if (this.props.products.length === null) return null; 
    return (
      <>
        <div className="splash-background">
          <div className="hero-div">
            <div className="message-container">
              <h1 className="banner-message">Welcome</h1>
              <div className="roladex-container">
                <div className="roladex">
                  <div className="words">Babes</div>{" "}
                  <div className="words">Lovers</div>
                  <div className="words">Friends</div>
                </div>
              </div>
            </div>

            <h3 className="banner-slogan"> Lets help you unwind</h3>
          </div>
        </div>
        <div className="new-features">
          <h2 className="heading">New Products</h2>
          
          <section>
            {this.props.products.map((product) => (<ProductItem product={product}/>))}
          </section>
        </div>
      </>
    );
  }
}
export default Splash;
