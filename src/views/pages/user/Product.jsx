import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../../components/Products/ProductPage/ProductPage';
import ProductPageSkeleton from '../../components/Skeletons/ProductPageSkeleton';

const URL_API = 'https://apimocha.com/shoper/products';

export default function Product() {
    const { productTitle } = useParams();
    const {setType, objProducts, setParameter, loading} = useProducts();

    useEffect(() => {
        setType('product');
        setParameter(productTitle);
    }, [])

    return (
    <>
        {
            loading ?
            <ProductPageSkeleton />
            :
            <ProductPage objProduct={objProducts} />
        }
    </>
    )
}