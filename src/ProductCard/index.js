import React from 'react';
import {BsFillBasket3Fill} from "react-icons/bs";
import {MdFavorite} from "react-icons/md";

const ProductCard = ({product}) => {
    return (
        <div className="w-[25%] my-10 mx-2 rounded-[10px]">
            <div>
                <img src={product.image} alt="img" className="w-[200px]"/>
            </div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <div className="flex items-center">
                <button type="button"
                        className="flex items-center justify-center">
                    <MdFavorite className="text-[20 px] text-red-500    "/>
                </button>

                <button type="button"
                        className="flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600
                         to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                         focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                         text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-[40px]">Add
                    <BsFillBasket3Fill className="ml-3"/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;