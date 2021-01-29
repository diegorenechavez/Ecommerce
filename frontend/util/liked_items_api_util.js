export const fetchAllLikedItems = (userId) => {
    return $.ajax({
        url: `api/users/${userId}/liked_items`,
        method: `GET`
    })
}

export const createLikedItem = (liked_item) => {
    return $.ajax({
        url: `api/liked_items`,
        method: `POST`,
        data: {liked_item}
    })
}


export const deleteLikeditem = (likedItemId) => { 
    return $.ajax({
        url: `api/liked_items/${likedItemId}`,
        method: `DELETE`,
    });
}