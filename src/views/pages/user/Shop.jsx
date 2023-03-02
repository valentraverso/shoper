import { useEffect, useState } from "react";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";

export default function Shop(){
    const [objProducts, setObjProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const fetchApi = await fetch(URL_API);
            const response = await fetchApi.json();
            
            setObjProducts(response);
        }
        fetchProducts();
    }, [])

    return(
        <>
            <ProductsSection catProduct={'Shop'} objProducts={objProducts} qCards="4" />
        </>
    )
}