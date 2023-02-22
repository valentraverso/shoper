import { useContext, useEffect } from 'react';
import './CountCartProducts.css';
import { QuantityCartContext } from '../../../../context/QuantityCartContext';
import { getQuantityCart } from '../../../../utils/utils';

export default function CountCardProducts({ children }) {
    const [quantityCart, setCart] = useContext(QuantityCartContext);

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