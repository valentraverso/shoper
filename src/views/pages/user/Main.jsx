import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import fetchProductsCategory from '../../../api/fetchProductsCategory.js';
import HeroesSection from "../../components/HeroesSection/HeroesSection.jsx";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";
import HeroSkeleton from '../../components/Skeletons/HeroSkeleton.jsx';
import './styles/Index.css';

function Main() {
    const [loadingHero, setLoadingHeroe] = useState(true);
    const [catProduct, setCatProduct] = useState('boards');
    const [objProducts, setObjProducts] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getProducts = async () => {
            const response = await fetchProductsCategory(catProduct);
            setObjProducts(response) 
            setLoading(false)
        }

        getProducts();

        return;
    }, [catProduct])

    setTimeout(() => {
        setLoadingHeroe(false);
    }, 1500)

    return (
        <div className='main-page__div'>
            {
                loadingHero ?
                    <HeroSkeleton />
                    :
                    <HeroesSection changeCat={catProduct => { setCatProduct(catProduct) }} />
            }

            <ProductsSection loading={loading} catProduct={catProduct} objProducts={objProducts} qCards="4" />
        </div>
    )
}

export default Main