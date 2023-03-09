import { useEffect, useState } from "react";
import fetchProducts from "../api/fetchProducts";

export default function useProducts() {
    const [catProduct, setCatProduct] = useState();
    const [objProducts, setObjProducts] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getProducts = async () => {
            const response = await fetchProducts(catProduct);

            setObjProducts(response)
            setLoading(false)
        }

        getProducts();
    }, [catProduct])

    return { objProducts, catProduct, setCatProduct, loading }
}