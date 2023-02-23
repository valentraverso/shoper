import { useState, useEffect } from 'react';
import { getProductsCategory } from '../../../utils/utils.js';
import HeroesSection from "../../components/HeroesSection/HeroesSection.jsx";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";
import prodArr from '../../../mocks/prodArr';
import './Index.css';

function Main(){
    const [catProduct, setCatProduct] = useState("Boards");
    const [objProducts, setObjProducts] = useState({});

    useEffect(() => {
        setObjProducts(getProductsCategory(prodArr, catProduct.toLowerCase()));
    }, [catProduct])

    return(
        <div className='main-page__div'>
            <HeroesSection changeCat={catProduct => {setCatProduct(catProduct)}}/>
            <ProductsSection catProduct={catProduct} objProducts={objProducts} qCards="4" />
        </div>
    )
}

export default Main