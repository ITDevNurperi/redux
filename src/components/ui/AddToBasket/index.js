import React from 'react';
import {BsFillBasket3Fill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../redux/ActionCreators/BasketActions";

const AddToBasket = ({product}) => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(addToBasket(product))}
                className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600
                         to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                         focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                         text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-[40px]">добавить в
            <BsFillBasket3Fill className="ml-3"/>
        </button>
    );
};

export default AddToBasket;