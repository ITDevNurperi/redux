import React from 'react';
import {FaTrashAlt} from "react-icons/fa";
import {AiOutlineMinus} from "react-icons/ai";
import {BsPlusLg} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {
    decreaseQuantity,
    deleteFromBasket,
    increaseQuantity
} from "../../components/redux/ActionCreators/BasketActions";

const BasketTable = ({product}) => {

    const dispatch = useDispatch()
    const {defaultCurrency,allCurrencies} = useSelector(s => s.main)
    const price = product.price * product.quantity * allCurrencies[defaultCurrency]

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.title}
            </th>
            <td className="px-6 py-4">
                <img src={product.image} width={40} alt=""/>
            </td>
            <td className="px-6 py-4 flex items-center mt-5">
                <span onClick={() => dispatch(decreaseQuantity(product))} className={`mx-2 cursor-pointer ${product.quantity === 1 ?"text-gray-600" : "text-blue-600"}`}><AiOutlineMinus/></span>
                {product.quantity}
                <span onClick={() => dispatch(increaseQuantity(product.id))} className="text-blue-500 mx-2 cursor-pointer"><BsPlusLg/></span>
            </td>
            <td className="px-6 py-4">
                {price}
            </td>
            <td className="text-2xl my-4 text-right">
                <FaTrashAlt onClick={() => dispatch(deleteFromBasket(product.id))} className="cursor-pointer"/>
            </td>
        </tr>
    );
};

export default BasketTable;