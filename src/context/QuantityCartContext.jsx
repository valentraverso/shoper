import { createContext, useState } from "react";

export const QuantityCartContext = createContext(null);

export default function CartContext({ children }) {
    const [quantityCart, setQuantityCart] = useState(0);

    return (
        <QuantityCartContext.Provider value={[quantityCart, setQuantityCart]}>
            {children}
        </QuantityCartContext.Provider>
    )
}