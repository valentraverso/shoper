import { useContext } from "react";
import { QuantityCartContext } from "../../context/QuantityCartContext";

export default function useCart(){
    const [quantityCart, setCart]  = useContext(QuantityCartContext);
    
    return [quantityCart, setCart];
}