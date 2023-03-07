import { useState } from "react";
import QuantityOrder from "../../../components/Cart/QuantityOrder/QuantityOrder";
import CartDescription from "../../../components/Cart/CartDescription/CartDescription";
import CartContainer from '../../../components/Cart/CartContainer';
import MsgFullWidth from "../../../components/PopUp/MsgFullWidth/MsgFullWidth";

function Cart() {
    const [msg, setMsg] = useState(false);

    const deleteMsg = () => {
        setMsg(true);
        setTimeout(() => setMsg(false), 3000);
    }

    return (
        <>
            {
                msg ?
                    <MsgFullWidth msg='Products deleted from the cart' type='error' />
                    :
                    null
            }
            <CartContainer>
                <QuantityOrder deleteMsg={() => deleteMsg()} />
                <CartDescription />
            </CartContainer>
        </>
    )
}

export default Cart