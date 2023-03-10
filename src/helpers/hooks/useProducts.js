import { useEffect, useState } from "react";
import fetchProducts from "../../api/fetchProducts";

export default function useProducts() {
    // Which type of data do you want (all, category, product)
    const [type, setType] = useState();
    const [parameter, setParameter] = useState(null);

    if (type === null || type === 'category' && parameter === null && type === 'product' && parameter === null) {
        return {}
    }

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
    }, [parameter]);

    console.log(objProducts)

    return { objProducts, setType, parameter, setParameter, loading }
}