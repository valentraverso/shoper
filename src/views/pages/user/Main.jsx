import { useState, useEffect } from 'react';
import { getProductsCategory } from '../../../utils/utils.js';
import HeroesSection from "../../components/HeroesSection/HeroesSection.jsx";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";
import HeroSkeleton from '../../components/Skeletons/HeroSkeleton.jsx';
import './styles/Index.css';

const URL_API = 'https://apimocha.com/shoper/products';

function Main() {
    const [catProduct, setCatProduct] = useState("Boards");
    const [loading, setLoading] = useState(false);
    const [loadingHero, setLoadingHeroe] = useState(true);
    const [objProducts, setObjProducts] = useState({});

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const fetchApi = await fetch(URL_API);
            const response = await fetchApi.json();

            setObjProducts(getProductsCategory(response, catProduct.toLowerCase()));
            setLoading(false);
        }

        fetchProducts();
    }, [catProduct])

    setTimeout(() => {
        setLoadingHeroe(false);
    }, 2000)

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