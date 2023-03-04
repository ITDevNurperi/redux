import {
    CHOOSE_THE_CURRENCY,
    GET_ONE_PRODUCT,
    GET_PRODUCTS,
} from "../ActionTypes";

const initialState = {
    products: [],
    oneProduct: {},
    defaultCurrency: localStorage.getItem('currency') || 'SOM',
    allCurrencies:{
        KGS: 1,
        RUB: 0.8,
        $: 0.012,
        KZT: 5.41,
    }
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {...state,products: action.payload}
        }

        case GET_ONE_PRODUCT: {
            return {...state, oneProduct: action.payload }
        }

        case CHOOSE_THE_CURRENCY: {
           return state = {...state,defaultCurrency: action.payload.target.value}
        }
        default:
            return state
    }
}