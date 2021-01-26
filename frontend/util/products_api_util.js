export const fetchAllProducts = (category) => {
    return $.ajax({
      url: `/api/products/splash/${category}`,
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

export const getSearchProducts = (query) => {
    return $.ajax({
        method: "GET",
        url: `/api/products/search`,
        data: {
          query: query
        }
    })
}

