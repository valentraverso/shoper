import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../../components/Products/ProductPage/ProductPage';
import ProductPageSkeleton from '../../components/Skeletons/ProductPageSkeleton';
import fetchSingleProduct from '../../../api/fetchSingleProducts';

export default function Product() {
    const { productId } = useParams();
    
    const {data: objProducts, isLoading} = useQuery(['product'], async() => {
        return await fetchSingleProduct(productId)
    })
    
    console.log(isLoading)

    return (
    <>
        {
            isLoading ?
            <ProductPageSkeleton />
            :
            <ProductPage objProduct={objProducts} />
        }
    </>
    )
}