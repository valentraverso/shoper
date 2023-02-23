import './ProductsCard.css';

function ProductsCard({img, title, price}){
    return (
        <div className="product-card__div">
            <div className="product-card-image__div">
                <img src={img} className="product-card-image__img" />
            </div>
            <div className="product-card-info__div">
                <span className="product-card-info-title__span">
                    {title}
                </span>
                <span className="product-card-info-price__span">
                € {price}
                </span>
            </div>
        </div>
    );
}

export default ProductsCard