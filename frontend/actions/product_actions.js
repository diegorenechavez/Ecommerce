import * as ProductApiUtil from "../util/products_api_util"

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"


export const receivedAllProducts = (products) => {
    return {
        type: RECEIVE_ALL_PRODUCTS,
        products 
    }
}

export const receivedProduct = (product) => { 
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const fetchAllProducts = (category) => (dispatch) => {
    return ProductApiUtil.fetchAllProducts(category).then((result) => dispatch(receivedAllProducts(result)));
}

export const fetchProduct = (productId) => (dispatch) => { 
    return ProductApiUtil.fetchProduct(productId).then((result) => dispatch(receivedProduct(result)))
}


// NEEDS FOR SEARCH THUNK ACTION CREATO
// export const getSearchProducts = (query) => dispatch => {
//     return BusinessApiUtil.getSearchProducts(query)
//         .then(products => dispatch(receiveAllProducts(products)))
// }