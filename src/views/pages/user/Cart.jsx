import QuantityOrder from "../../components/Cart/QuantityOrder/QuantityOrder";
import CartDescription from "../../components/Cart/CartDescription/CartDescription";
import CartContainer from '../../components/Cart/CartContainer';

function Cart() {
    return (
        <CartContainer>
            <QuantityOrder />
            <CartDescription />
        </CartContainer>
    )
}

export default Cart