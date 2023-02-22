import { useState, useEffect, useContext } from 'react';
import { QuantityCartContext } from '../../../../context/QuantityCartContext';
import { AddProduct, RestProduct, getCart, DeleteProductCart } from '../../../../utils/utils';
import prodArr from '../../../../mocks/prodArr.js';
import './QuantityOrder.css';
import CartOptions from '../CartOptions/CartOptions';

export default function QuantityOrder() {
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
    }

    return (
        <div className="products-cart-container__div">
            {   
                cart.length === 0 ?
                <h1>Add products to your cart!</h1>
                :
                cart.map(({title, img, totalPrice, id, quantity}, index) => {
                    return (
                        <div className='product-cart__div' key={index}>
                            <div className="product-cart-img__div">
                                <img className='product-cart-img__img' src={img} />
                            </div>
                            <div className="product-cart-info__div">
                                <p>{title}</p>
                                <p>Total price: € {totalPrice}</p>
                                <span onClick={() => handleRest(id, 1)}>-</span>
                                <span>{quantity}</span>
                                <span onClick={() => handleAdd(id, 1)}>+</span>
                            </div>
                            <div className='product-cart-options__div'>
                                <CartOptions id={id} quantity={quantity} handleDelete={handleDelete} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}