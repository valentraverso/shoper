import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../../../../helpers/utils/utils";
import useCart from "../../../../helpers/hooks/useCart";
import AddToCart from "../../Buttons/AddToCart/AddToCart";

export default function CartDescription({cart}){
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantityCart, setQuantityCart] = useCart();

    useEffect(() => {
        const quantity = cart.reduce((acc, sum) => acc + sum.totalPrice, 0);
        setTotalPrice(quantity);
    }, [quantityCart]);

    return(
        <div className="cart-description__div">
            <div className="cart-description-inside__div">
                <span>Total products: {}</span>
                <span>€ {totalPrice}</span>
                <Link to='buy'>
                    <AddToCart text='Buy Now' />
                </Link>
            </div>
        </div>
    )
}