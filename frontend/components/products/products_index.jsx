import React from "react"
// import ProductIndexItem from "./product_index_item"
import ProductItem from "../products/product_item"
 

class ProductIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getSearchProducts(this.props.match.params.query)
    }    
    
    render(){
        if(!this.props.products){
            return null
        }
        return(
            <div className="product-index-container">
                    {this.props.products.map((product) => (<ProductItem 
                                                                product={product}
                                                                key={product.id}
                                                                currentUserId={this.props.currentUserId}
                                                                fetchProduct={this.props.fetchProduct}
                                                                />))}
            </div>
        )
    }
}





export default ProductIndex