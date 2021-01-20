export const fetchAllCartItems = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/cart_items`
    })
}



export const createCartItem = (cart_item) => {
    return $.ajax({
        url: `/api/cart_items`,
      method: "POST",
      data: {
        cart_item
      },
    });
}

export const deleteCartItem = (cartItemId) => {
    return $.ajax({
        method: `DELETE`,
        url: `/api/cart_items/${cartItemId}`
    })
}