import { useContext } from "react";
import {CreateUserContext} from "../context/UserContext"; 

export default function useSession(){
    const [state, dispatch] = useContext(CreateUserContext);

    return [state, dispatch];
}