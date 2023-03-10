import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import fetchProductsCategory from '../../../api/fetchProductsCategory.js';
import HeroesSection from "../../components/HeroesSection/HeroesSection.jsx";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";
import HeroSkeleton from '../../components/Skeletons/HeroSkeleton.jsx';
import './styles/Index.css';

function Main() {
    const [loadingHero, setLoadingHeroe] = useState(true);
    const [catProduct, setCatProduct] = useState('boards');
    
    const {data: objProducts, isLoading} = useQuery(['category'], async () => {
        return await fetchProductsCategory(catProduct);
    })

    setTimeout(() => {
        setLoadingHeroe(false);
    }, 1500)

    return (
        <div className='main-page__div'>
            {
                loadingHero ?
                    <HeroSkeleton />
                    :
                    <HeroesSection 
                    changeCat={catProduct => { setCatProduct(catProduct) }} />
            }

            <ProductsSection loading={isLoading} catProduct={catProduct} objProducts={objProducts} qCards="4" />
        </div>
    )
}

export default Main