import { useEffect, useState } from "react";

export default function useProducts(){
    const [catProduct, setCatProduct] = useState();
    const [apiUrl, setApiUrl] = useState();
    const [loading, setLoading] = useState(false);
    const [objProducts, setObjProducts] = useState({});
    
    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const fetchApi = await fetch(apiUrl);
            const response = await fetchApi.json();

            setObjProducts(getProductsCategory(response, catProduct.toLowerCase()));
            setLoading(false);
        }

        fetchProducts();
    }, [catProduct])

    return[setCatProduct, setApiUrl, objProducts, loading]
}