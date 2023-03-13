import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import QuantityOrder from "../../../components/Cart/QuantityOrder/QuantityOrder";
import CartDescription from "../../../components/Cart/CartDescription/CartDescription";
import CartContainer from '../../../components/Cart/CartContainer';
import {MsgFullWidth} from "../../../components/PopUp";
import { getCart } from "../../../../helpers/utils/utils";

function Cart() {
    const [msg, setMsg] = useState(false);

    const { data: cart, isLoading, isRefetching, refetch } = useQuery(['cart'], async () => {
        return await getCart();
    })

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
                {
                    isLoading ?
                        <p>Cargando</p>
                        :
                        <>
                            <QuantityOrder 
                            cart={cart} 
                            isRefetching={isRefetching} 
                            deleteMsg={() => deleteMsg()} 
                            refetch={refetch} />
                            <CartDescription 
                            cart={cart}
                            isRefetching={isRefetching} />
                        </>
                }

            </CartContainer>
        </>
    )
}

export default Cart