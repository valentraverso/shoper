import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from '../../components/Products/ProductPage/ProductPage';
import ProductPageSkeleton from '../../components/Skeletons/ProductPageSkeleton';

const URL_API = 'https://apimocha.com/shoper/products';

export default function Product() {
    const { productTitle } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const fetchProducts = async () => {
            const fetchApi = await fetch(URL_API);
            const response = await fetchApi.json();
            
            setProduct(response.find((product) => {
                return product.title == productTitle;
            }));
            setLoading(false);
        }

        fetchProducts();
    }, [productTitle])

    return (
    <>
        {
            loading ?
            <ProductPageSkeleton />
            :
            <ProductPage objProduct={product} />
        }
    </>
    )
}