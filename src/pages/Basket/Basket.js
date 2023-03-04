import React from 'react';
import BasketPage from "./BasketPage";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Basket = () => {

    const {basket} = useSelector(state => state.basket)
    const {defaultCurrency,allCurrencies} = useSelector(state => state.main)
    const totalPrice = basket.reduce((acc, el) =>{
        return acc + el.price * el.quantity * allCurrencies[defaultCurrency]
    },0)

    return (
       <div className="container">
           <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
               {
                   basket.length ? <BasketPage/> :
                       <Link to="/products">
                           <div className="text-center w-[30%] mx-auto my-20  border-2 h-16 flex justify-center items-center">EMPTY BASKET</div>
                       </Link>
               }
           </div>
           <div className="w-full text-2xl font-mono">
               Total: {totalPrice} {defaultCurrency}
           </div>
       </div>
    );
};

export default Basket;