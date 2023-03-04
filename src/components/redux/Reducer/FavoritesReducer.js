import {ADD_TO_FAVORITE} from "../ActionTypes";


const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
}

export const FavoritesReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_FAVORITE: {
            const foundProduct = state.favorites.find(el => el.id === action.payload.id)
            if (foundProduct) {
                return {...state, favorites: state.favorites.filter(el => el.id !== foundProduct.id)}

            }else {
                return {...state,favorites: [...state.favorites, {...action.payload,isLiked: true}]}
            }
        }

        default: {
            return state
        }
    }
}