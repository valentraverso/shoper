import { useState, useEffect } from 'react';
import HeroesSection from "../../components/HeroesSection/HeroesSection.jsx";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import prodArr from '../../../mocks/prodArr';


function Main(){
    const [catProduct, setCatProduct] = useState("Boards");
    const [objProducts, setObjProducts] = useState({});

    useEffect(() => {
        setObjProducts(prodArr.filter(product => product.category === catProduct.toLowerCase()));
    }, [catProduct])

    return(
        < >
            <HeroesSection changeCat={catProduct => {setCatProduct(catProduct)}}/>
            <ProductsSection catProduct={catProduct} objProducts={objProducts} qCards="4" />
        </>
    )
}

export default Main