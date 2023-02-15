import React from 'react';
import {FaTrashAlt} from "react-icons/fa";

const BasketIndex = ({product}) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.title}
            </th>
            <td className="px-6 py-4">
                <img src={product.image} alt=""/>
            </td>
            <td className="px-6 py-4">
                {product.quantity}
            </td>
            <td className="px-6 py-4">
                {product.price}
            </td>
            <td className="px-6 py-4 text-xl text-right">
                <FaTrashAlt/>
            </td>
        </tr>
    );
};

export default BasketIndex;