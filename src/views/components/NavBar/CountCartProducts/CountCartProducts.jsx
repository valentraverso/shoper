import { useEffect } from 'react';
import useCart from '../../../../helpers/hooks/useCart';
import { getQuantityCart } from '../../../../helpers/utils/utils';
import './CountCartProducts.css';

export default function CountCardProducts({ children }) {
    const [quantityCart, setCart] = useCart();

    useEffect(() => {
        setCart(getQuantityCart);
    }, [quantityCart]);

    return (
            <div className='cart-menu__div'>
                <span className='cart-menu-quantity__span'>{quantityCart}</span>
                {children}
            </div>
    )
}