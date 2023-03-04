import {ADD_TO_BASKET, DECREASE_QUANTITY, DELETE_FROM_BASKET, INCREASE_QUANTITY} from "../ActionTypes";


const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || [],
}

export const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:{
            return {...state, basket: [...state.basket,{...action.payload, quantity: 1}]}
        }

        case INCREASE_QUANTITY: {
            return {...state,basket: state.basket.map(el => el.id === action.payload ? {...el ,quantity:el.quantity + 1} : el)}

        }

        case DECREASE_QUANTITY: {
            return {...state,basket: state.basket.map(el => {
                    if (el.id === action.payload.id) {
                        if (el.quantity > 1) {
                            return {...el ,quantity:el.quantity - 1}
                        }else return el
                    }else return el
                })}
        }

        case DELETE_FROM_BASKET: {
            return {...state,basket: state.basket.filter(el => el.id !== action.payload)}

        }

        default: {
          return state
        }
    }
}