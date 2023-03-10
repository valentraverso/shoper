import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../../helpers/hooks/useProducts";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";

export default function Categories() {
    const { category } = useParams();
    const {setType, objProducts, setParameter, loading} = useProducts();

    useEffect(() => {
        setType('category');
        setParameter(category);
    }, [category])

    return (
        <ProductsSection loading={loading} catProduct={category} objProducts={objProducts} qCards="4" />
    )
}