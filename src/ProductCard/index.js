import React from 'react';
import {BsFillBasket3Fill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import AddToFavorite from "../components/ui/AddToFavorite/inedx";
import AddToBasket from "../components/ui/AddToBasket";
import {addToFavorite} from "../components/redux/ActionCreators/FavoriteActions";


const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {defaultCurrency,allCurrencies} = useSelector(s => s.main)
    const {basket} = useSelector(s => s.basket)
    const foundProduct = basket.some(el => el.id === product.id)
    const price = product.price * allCurrencies[defaultCurrency]

    return (
        <div className="w-[25%] my-10 mx-10 rounded-[10px]">
            <div onDoubleClick={() => {
                dispatch(addToFavorite(product))
            }}>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt="img" className="w-[200px]"/>
                </Link>
            </div>
            <h2>{product.title}</h2>
            <h3 className="text-start font-mono">{price} {defaultCurrency}</h3>
            <div className="flex items-center">
                <AddToFavorite product={product}/>
                {
                    foundProduct ?
                        <button onClick={() => navigate("/basket")} type="button"
                                className="flex items-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200
                        hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4
                        focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium
                         rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-[30px]">перейти в
                            <BsFillBasket3Fill className="ml-3"/>
                        </button>
                        :
                       <AddToBasket product={product}/>
                }
            </div>
        </div>
    );
};

export default ProductCard;