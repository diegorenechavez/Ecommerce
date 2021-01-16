import React from 'react'
import ProductItem from './product_item'

class Hair extends React.Component { 
    constructor(props) { 
        super(props)
    }

    componentDidMount() { 
        this.props.fetchAllProducts("hair")
    }


    render() { 
        return (
          <div>
            <div className="splash-background">
              <div className="hair">
                <div className="message-container">
                  <h1 className="banner-message">For</h1>
                  <div className="roladex-container">
                    <div className="word-container">
                      <div className="words one">Hair</div>{" "}
                      
                    </div>
                  </div>
                </div>

                <h3 className="banner-slogan"></h3>
              </div>
            </div>

            {this.props.products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        );
    }

}

export default Hair;