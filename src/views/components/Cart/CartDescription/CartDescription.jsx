import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../../../helpers/hooks/useCart";
import AddToCart from "../../Buttons/AddToCart/AddToCart";

export default function CartDescription({ cart, isRefetching }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantityCart, setQuantityCart] = useCart();

    useEffect(() => {
        const quantity = cart.reduce((acc, sum) => acc + sum.totalPrice, 0);
        setTotalPrice(quantity);
    }, [isRefetching]);

    return (
        <div className="cart-description__div">
            <div className="cart-description-inside__div">
                <span>Total products: { }</span>
                <span>€
                    {
                        isRefetching ?
                            <img className='spinner-fetching__img' src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831' />
                            :
                            totalPrice
                    }
                </span>
                <Link to='buy'>
                    <AddToCart text='Buy Now' />
                </Link>
            </div>
        </div>
    )
}