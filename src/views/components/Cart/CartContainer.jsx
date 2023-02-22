import './CartContainer.css';

export default function CartContainer({children}){
    return (
        <section className='cart-container__section'>
            {children}
        </section>
    )
}