import React from 'react';
import {MdFavorite} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {IoMdTrash} from "react-icons/io";
import {addToFavorite} from "../../redux/ActionCreators/FavoriteActions";

const AddToFavorite = ({product}) => {

    const {favorites} = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const found = favorites.some(el => el.id === product.id)

    return (
        <button onClick={() => dispatch(addToFavorite(product))} type="button" className="flex items-center justify-center">
            {
                product.isLiked ? <IoMdTrash className="text-2xl"/> :  <MdFavorite className={`text-[20px] ${found ? "text-red-500" : ""}`}/>
            }
        </button>
    );
};

export default AddToFavorite;