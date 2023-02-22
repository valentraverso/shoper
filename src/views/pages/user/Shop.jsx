import ProductsSection from "../../components/ProductsSection/ProductsSection";
import prodArr from "../../../mocks/prodArr";

export default function Shop(){
    return(
        <>
            <ProductsSection catProduct={'Shop'} objProducts={prodArr} qCards="4" />
        </>
    )
}