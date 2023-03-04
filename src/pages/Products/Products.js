import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../../ProductCard";
import {getProducts} from "../../components/redux/ActionCreators/ActionCreators";

const Products = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
    const {products} = useSelector((state) => state.main)

    return (
        <div className="container mx-auto">
            <h1 className="text-[30px] text-center">Products</h1>
         <div className="flex flex-wrap">
             {products.map((product) => <ProductCard product={product} key={product.id}/>
                 )}
         </div>
        </div>
    );
};

export default Products;