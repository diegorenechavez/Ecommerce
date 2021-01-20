export const fetchAllCartItems = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/cart_items`
    })
}



export const createCartItem = (cartItem) => {
    return $.ajax({
        mehtod: `POST`,
        url: `/api/cart_items`
    })
}

export const deleteCartItem = (cartItemId) => {
    return $.ajax({
        mehtod: `DELETE`,
        url: `/api/cart_items/${cartItemId}`
    })
}