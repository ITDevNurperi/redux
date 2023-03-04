import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseCurrency} from "../redux/ActionCreators/ActionCreators";

const Header = () => {
    const {basket} = useSelector(state => state.basket)
    const defaultCurrency = useSelector(s => s.main.defaultChecked)
    const dispatch = useDispatch()
    let quantityProducts = null
    if (basket.length) {
        quantityProducts = basket.reduce((acc,el) => acc + el.quantity,0)
    }

    const optionItems = {
        $: "USA",
        RUB: "RUB",
        KGS: "KGS",
        KZT: "KZT"
    }

    return (
       <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
           <div className="container mx-auto">
              <div className="flex justify-between py-4 text-center  ">
                  <h1 className="header-menu text-white text-4xl font-bold">logo</h1>
                  <div className="text-[19px] flex items-center">
                      <NavLink to={"/"} className="text-white mr-10">Home</NavLink>
                      <NavLink to={"products"} className="text-white mr-10">Products</NavLink>
                      <NavLink to={"favorite"} className="text-white mr-10">Favorite</NavLink>
                      <NavLink to={"basket"} className="text-white mr-10 relative">
                          {
                              basket.length ? <div className="right-[-20px] rounded-[50%] bg-gray-700 w-6 h-6 absolute flex justify-center items-center top-[-15px]">
                                  {quantityProducts}  </div> : ""
                          }
                          Basket
                      </NavLink>
                      <select onChange={(event) => dispatch(chooseCurrency(event))} id="countries"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[33%]
                               p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder
                               -gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          {
                              Object.keys(optionItems).map(el => (
                                  <option value={el} selected={defaultCurrency === el}>{optionItems[el]}</option>
                              ))
                          }
                          {/*<option value="$" >USA</option>*/}
                          {/*<option value="RUB">RUB</option>*/}
                          {/*<option value="SOM"selected={true}>KGS</option>*/}
                          {/*<option value="TENGE" >KZT</option>*/}
                      </select>
                  </div>
              </div>
           </div>
       </header>
    );
};

export default Header;