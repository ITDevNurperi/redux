import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getOneProducts} from "../../components/redux/ActionCreators/ActionCreators";

const ProductDetail = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const detail = useSelector(state => state.main.oneProduct)
    useEffect(() => {
        return () => {
            dispatch(getOneProducts(id))
        }
    },[])
    return (
        <div className="container">
            <img src={detail.image} alt=""/>
        </div>
    );
};

export default ProductDetail;