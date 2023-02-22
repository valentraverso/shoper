import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import prodArr from "../../../mocks/prodArr";

export default function Categories() {
    const [objProducts, setObjProducts] = useState({});
    const { category } = useParams();

    useEffect(() => {
        setObjProducts(
            prodArr.filter(product => {
                return product.category === category;
            })
        )
    }, [category])

    return (
        <ProductsSection catProduct={category} objProducts={objProducts} qCards="4" />
    )
}