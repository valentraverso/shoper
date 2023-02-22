import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../../../../utils/utils";
import { QuantityCartContext } from "../../../../context/QuantityCartContext";
import AddToCart from "../../Buttons/AddToCart/AddToCart";
import prodArr from "../../../../mocks/prodArr";

export default function CartDescription(){
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantityCart, setQuantityCart] = useContext(QuantityCartContext);

    useEffect(() => {
        const quantity = getCart(prodArr).reduce((acc, sum) => acc + sum.totalPrice, 0);
        setTotalPrice(quantity);
    }, [quantityCart]);

    return(
        <div className="cart-description__div">
            <div className="cart-description-inside__div">
                <span>€ {totalPrice}</span>
                <Link to='buy'>
                    <AddToCart text='Buy Now' />
                </Link>
            </div>
        </div>
    )
}