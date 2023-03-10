import CartContext from './QuantityCartContext.jsx';
import UserContext from './UserContext.jsx';
import ReactQueryContext from './ReactQueryContext';

export default function GeneralProvider({ children }) {
    return (
        <ReactQueryContext>
            <UserContext>
                <CartContext>
                    {children}
                </CartContext>
            </UserContext>
        </ReactQueryContext>
    )
}