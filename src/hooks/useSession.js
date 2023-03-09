import { useContext } from "react";
import {CreateUserContext} from "../context/UserContext"; 
import { ACTIONS_USER } from "../reducers/userReducers";

export default function useSession(){
    const [state, dispatch] = useContext(CreateUserContext);

    const verifyLogin = () => {
        dispatch({type: ACTIONS_USER.VERIFY_LOGIN})
    }

    return {state, verifyLogin};
}