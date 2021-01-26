import React from "react"

class CartNumber extends React.Component { 
    constructor(props) { 
        super(props)
        this.cartQuantity = this.cartQuantity.bind(this)
        this.state = {
            num: 0
        }
    }

    componentDidMount() { 
        
        this.props.fetchAllCartItems();
       
    }

    // componentDidUpdate(){
    //     this.cartQuantity()
    // }



    cartQuantity() { 
        let sum = 0
        this.props.cartItems.forEach(cartItem => { 
            sum += cartItem.quantity
            
        })
        
        return sum
      
        
    }

    

    render() {
        if(!this.props.cartItems) return null
        console.log(this.props.cartItems)
        // if(!this.props.cartItems[0].quantity) return null
        return (
            <div className="cart-number-wrapper">
                <h2 className="cart-number">{this.cartQuantity()}</h2>
            </div>
        )
    }
}

export default CartNumber