import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchProductsCategory from "../../../api/fetchProductsCategory";
import ProductsSection from "../../components/Products/ProductsSection/ProductsSection";
import './styles/Categories.css';

export default function Categories() {
    const { category } = useParams();
    
    const {data: objProducts, isLoading} = useQuery(['category', category], async () => {
        return await fetchProductsCategory(category);
    })

    return (
    <div className="products-categories__div">
        <ProductsSection loading={isLoading} catProduct={category} objProducts={objProducts} qCards="4" />
        </div>
    )
}