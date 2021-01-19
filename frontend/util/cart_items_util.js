export const fetchAllCartItems = (userId) => {
  return $.ajax({
      url: `api/users/${userId}/cart_items`,
      method: "GET"
  });
};

export const createCartItem = (userId, productId) => {
  return $.ajax({
    method: "post",
    url: `/api/users/${userId}/products/${productId}/cart_items`,
    data: { cart_item: userId, productId},
  });
};

export const deleteCartItem = (userId, cartItemId) => {
  return $.ajax({
    method: "delete",
    url: `/api/users/${userId}/cart_items/${cartItemId}`,
  });
};