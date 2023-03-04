import React from 'react';
import BasketTable from "./BasketTable";
import {useSelector} from "react-redux";

const BasketPage = () => {

    const {basket} = useSelector(state => state.basket)
    const {defaultCurrency} = useSelector(s => s.main)

    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price({defaultCurrency})
                    </th>
                    <th scope="col" className="px-6 py-3">

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketTable product={el} key={el.id}/> )
                }
                </tbody>
            </table>
        </div>
    );
};

export default BasketPage;