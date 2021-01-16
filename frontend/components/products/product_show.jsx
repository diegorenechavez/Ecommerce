import React from 'react'
import { Link } from "react-router-dom";
import Header from '../header/header_container'

class ProductShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }

    render(){

        



























        
        if(!this.props.product){
            return null
        }
        return(
            <div className="prodcut-show-container">
                <section className="product">
                    <div className="">
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default ProductShow