import { $CombinedState } from "redux"

export const fetchCart = (userId) => {
    return $.ajax({
        url: `api/users/${userId}/carts`,
        method: 'GET'
    })
}
 
export const createCart = (userId) => {
    return $.ajax({
        url: `api/users/${userId}/carts`,
        method:'POST'
    })

}