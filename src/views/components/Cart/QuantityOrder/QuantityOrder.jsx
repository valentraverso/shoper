import { useState, useEffect, useContext } from 'react';
import { QuantityCartContext } from '../../../../context/QuantityCartContext';
import { AddProduct, RestProduct, getCart, DeleteProductCart } from '../../../../helpers/utils/utils';
import './QuantityOrder.css';

export default function QuantityOrder({deleteMsg}) {
    const [quantityCart, setQuantityCart] = useContext(QuantityCartContext);
    const [cart, setCart] = useState(getCart(prodArr));

    useEffect(() => {
        setCart(getCart(prodArr));
    }, [quantityCart])

    const handleAdd = (id, quantity) => {
        AddProduct(id, quantity);
        setQuantityCart(prevState => prevState + quantity);
    }

    const handleRest = (id, quantity) => {
        RestProduct(id, quantity);
        setQuantityCart(prevState => prevState - quantity);
    }

    const handleDelete = (id, quantity) => {
        DeleteProductCart(id);
        setQuantityCart(prevState => prevState - quantity); 
        deleteMsg();
    }

    return (
            <div className="products-cart-container__div">
                {
                    cart.length === 0 ?
                        <h1>Add products to your cart!</h1>
                        :
                        cart.map(({ title, img, totalPrice, id, quantity }, index) => {
                            return (
                                <div className='product-cart__div' key={index}>
                                    <div className="product-cart-img__div">
                                        <img className='product-cart-img__img' src={img} />
                                    </div>
                                    <div className="product-cart-info__div">
                                        <p>{title}</p>
                                        <p>Total price: € {totalPrice}</p>
                                        <span className='quantity-handler__span' onClick={() => handleRest(id, 1)}>-</span>
                                        <span>{quantity}</span>
                                        <span className='quantity-handler__span' onClick={() => handleAdd(id, 1)}>+</span>
                                    </div>
                                    <div className='product-cart-options__div'>
                                        <p onClick={() => handleDelete(id, quantity)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
    )
}