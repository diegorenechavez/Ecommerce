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

    


    cartQuantity() { 
        let sum = 0;
        this.props.cartItems.forEach(cartItem => { 
            sum += cartItem.quantity
            
        })
        
        return sum
      
        
    }

    

    render() {
        if(!this.props.cartItems) return null
        // if(!this.props.cartItems[0].quantity) return null
        return (
            <div className="cart-number-wrapper">
                <h2 className="cart-number">{this.cartQuantity() === 0? null : this.cartQuantity()}</h2>
            </div>
        )
    }
}

export default CartNumber