import { useState, useEffect } from 'react';
import useProducts from '../../../hooks/useProducts.js';
import HeroesSection from "../../components/HeroesSection/HeroesSection.jsx";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";
import HeroSkeleton from '../../components/Skeletons/HeroSkeleton.jsx';
import './styles/Index.css';

function Main() {
    const [loadingHero, setLoadingHeroe] = useState(true);
    const {setType, objProducts, catProduct, setParameter, loading} = useProducts();

    useEffect(() => {
        setType('category');
        setParameter('boards');
    }, [])


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

            <ProductsSection loading={loading} catProduct={catProduct} objProducts={objProducts} qCards="4" />
        </div>
    )
}

export default Main