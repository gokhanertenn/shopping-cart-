import SHOP_DATA from "../../SHOP_DATA"


const INITIAL_STATE = {
    productList:SHOP_DATA,
    basket:[],
    
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_BASKET':
        return {...state, basket : [...state.basket,action.payload]}
      
      


        case 'DELETE_BASKET':
           return {...state,basket:[...state.basket.filter((id) => id !== action.payload)]}
        default: 
        return state
    }
}
