import { RECEIVE_ALL_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions"


const ProductsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products;
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product;
        default:
            return oldState;
    }
}

export default ProductsReducer;

