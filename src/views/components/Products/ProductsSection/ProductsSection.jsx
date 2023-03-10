import { Link } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';
import './ProductsSection.css';
import ProductSectionSkeleton from '../../Skeletons/ProductSectionSkeleton';

function ProductsSection({ catProduct, objProducts, qCards, loading }) {
    const productsCards = "products-section-cards-" + qCards + "__div";

    return (
        <section className="products-section__section">
            <div className="products-section-title__div">
                <h1>{catProduct}</h1>
            </div>
            {
                loading ?
                    <ProductSectionSkeleton productsCards={productsCards}/>
                    :
                    <div className={productsCards} onClick={() => scrollTo(top)}>
                        {
                            objProducts?.length > 0 ? objProducts.map((product, index) => {
                                return (
                                    <Link key={index} to={`http://localhost:5173/shop/${product.id}`}>
                                        <ProductsCard key={index} img={product.img} price={product.price} title={product.title} />
                                    </Link>
                                )
                            }) : <p>No se encontraron productos</p>
                        }
                    </div>
            }
        </section>
    );
}

export default ProductsSection