import { createContext, useState, useReducer } from "react";

// export const QuantityCartContext = createContext(null);
const initialValue = createContext({
    cart: 0,
    user: null,
    role: null,
});

export default function CartContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <QuantityCartContext.Provider value={[state, dispatch]}>
            {children}
        </QuantityCartContext.Provider>
    )
}