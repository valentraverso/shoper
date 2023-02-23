import { useState, useContext } from 'react';
import './ProductPage.css';
import { AddProduct } from '../../../utils/utils';
import { QuantityCartContext } from '../../../context/QuantityCartContext';
import AddToCart from '../Buttons/AddToCart/AddToCart';
import MsgFullWidth from '../PopUp/MsgFullWidth/MsgFullWidth';

export default function ProductPage({ objProduct }) {
    const [quantity, setQuantity] = useState(0);
    const [quantityCart, setQuantityCart] = useContext(QuantityCartContext);
    const [msgReady, setMsgReady] = useState(false);
    const { id, title, img } = objProduct;

    const sum = () => {
        setQuantity(prevState => prevState + 1);
    }

    const rest = () => {
        if (quantity <= 0) {
            return;
        }
        setQuantity(prevState => prevState - 1);
    }

    const add = () => {
        AddProduct(id, quantity);
        setQuantityCart(prevState => prevState + quantity);
        setQuantity(0);
        setMsgReady(true);
        setTimeout(() => setMsgReady(false), 3000);
    }

    return (
        <section>
            {
                msgReady ?
                    <MsgFullWidth msg='Products add to cart!' type='success' /> :
                    null
            }
            <div className="top-product-section__div">
                <div className='top-product-img__div'>
                    <img className='top-product-img__img' src={img} alt='portada'></img>
                </div>
                <div className='top-product-info__div'>
                    <h1>{title}</h1>
                    <div className='add-quantity-product__div'>
                        <div className='add-quantity-product-title__div'>
                            <span>Quantity</span>
                        </div>
                        <span onClick={rest} className="quantity-handler__span">-</span>
                        <span className='quantity-visor__span'>{quantity === 0 ? 0 : quantity}</span>
                        <span className="quantity-handler__span" onClick={sum}>+</span>
                    </div>
                    <div onClick={() => quantity !== 0 ? add() : null}>
                        <AddToCart text='Add To Cart' />
                    </div>
                </div>
            </div>
        </section>
    )
}