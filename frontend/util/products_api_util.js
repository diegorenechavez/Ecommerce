export const fetchAllProducts = (category) => {
    return $.ajax({
      url: `/api/products`,
      method: "GET",
    });
}

export const fetchProduct = (productId) => {
    return $.ajax({
      url: `/api/products/${productId}`,
      method: "GET",
    });
}





// NEEDED FOR SEARCH FETCH

// export const getSearchProduct = (query) => {
//     return $.ajax({
//         method: "GET",
//         url: "/api/product/search",
//         data: {query: query}
//     })
// }

