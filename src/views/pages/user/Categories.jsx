import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";

const URL_API = 'https://apimocha.com/shoper/products';

export default function Categories() {
    const [objProducts, setObjProducts] = useState({});
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const fetchApi = await fetch(URL_API);
            const response = await fetchApi.json();
            
            setObjProducts(response.filter(product => {
                return product.category === category;
            }));
            setLoading(false);
        }

        fetchProducts();
    }, [category])

    return (
        <ProductsSection loading={loading} catProduct={category} objProducts={objProducts} qCards="4" />
    )
}