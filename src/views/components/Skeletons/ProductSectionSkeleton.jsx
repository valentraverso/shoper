import { Skeleton } from "@mui/material"
import ProductsCard from "../Products/ProductsCard/ProductsCard"

export default function ProductSectionSkeleton({productsCards}) {
    return (
        <div className={productsCards}>
            <Skeleton width={100}>
                <ProductsCard />
            </Skeleton>
            <Skeleton width={100}>
                <ProductsCard />
            </Skeleton>
            <Skeleton width={100}>
                <ProductsCard />
            </Skeleton>
            <Skeleton width={100}>
                <ProductsCard />
            </Skeleton>
        </div>
    )
}