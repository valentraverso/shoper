import { useEffect, useState } from "react";
import fetchProducts from "../api/fetchProducts";

export default function useProducts() {
    // Which type of data do you want (all, category, product)
    const [type, setType] = useState();

    if(type === null){
        return {}
    }
    
    const [parameter, setParameter] = useState();
    const [objProducts, setObjProducts] = useState({});

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getProducts = async () => {
            const response = await fetchProducts(type, parameter);

            setObjProducts(response)
            setLoading(false)
        }

        getProducts();
    }, [catProduct])

    return { setType, objProducts, catProduct, setParameter, loading }
}