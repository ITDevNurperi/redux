import {
    CHOOSE_THE_CURRENCY,
    GET_ONE_PRODUCT,
    GET_PRODUCTS,} from "../ActionTypes";
import axios from "axios";

export const getProducts = () => {
    return async (dispatch) => {
        try {
            const res = await axios("https://fakestoreapi.com/products")
            const {data} = await res
            dispatch({type:GET_PRODUCTS, payload:data})
        }catch (e) {
            console.log(e)
        }
    }
}

export const getOneProducts = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios(`https://fakestoreapi.com/products/${id}`)
            const {data} = await res
            dispatch({type:GET_ONE_PRODUCT, payload: data})
        }catch (e) {
            console.log(e)
        }
    }
}

/** CURRENCY ACTIONS **/
export const chooseCurrency = (e) =>  {
    let optionValue = e.target.value
    localStorage.setItem('currency',optionValue)
    return ({type:CHOOSE_THE_CURRENCY, payload:e})
}