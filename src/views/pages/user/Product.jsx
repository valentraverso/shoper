import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../../components/ProductPage/ProductPage';
import prodArr from "../../../mocks/prodArr";

export default function Product() {
    const { productTitle } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        setProduct(
        prodArr.find((product) => {
            return product.title == productTitle;
        }))
    }, [productTitle])

    return (
            <ProductPage objProduct={product} />
    )
}