export const addBasket = (product) => {
    return { type: "ADD_BASKET",payload:product}
}
export const deleteBasket = id => {
    return  {type: "DELETE_BASKET",payload:id}
}