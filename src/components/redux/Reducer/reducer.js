import {
    ADD_TO_BASKET,
    ADD_TO_FAVORITE,
    CHOOSE_THE_CURRENCY,
    DECREASE_QUANTITY,
    DELETE_FROM_BASKET, INCREASE_QUANTITY
} from "./ActionTypes";

const initialState = {
    products: [
        {
            id: 1,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg',
        },

        {
            id: 2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg',
        },
        {
            id: 3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg',
        },
        {
            id: 4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 2,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg',
        },
        {
            id: 5,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 1,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg',
        },
        {
            id: 6,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image:
                'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg',
        },
    ],
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    defaultCurrency: localStorage.getItem('currency') || 'SOM',
    allCurrencies:{
        KGS: 1,
        RUB: 0.8,
        $: 0.012,
        KZT: 5.41,
    }
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS": {
            return state
        }

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

        case ADD_TO_FAVORITE: {
            const foundProduct = state.favorites.find(el => el.id === action.payload.id)
           if (foundProduct) {
               return {...state, favorites: state.favorites.filter(el => el.id !== foundProduct.id)}

           }else {
               return {...state,favorites: [...state.favorites, {...action.payload,isLiked: true}]}
           }
        }

        case CHOOSE_THE_CURRENCY: {
           return state = {...state,defaultCurrency: action.payload.target.value}
        }
        default:
            return state
    }
}