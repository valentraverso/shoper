import { useContext } from "react";
import { ACTIONS_USER } from "../../context/reducers/userReducers";
import sessionData from '../../context/reducers/user/getSession.js';
import { AuthContext } from "../../context/UserContext";

export default function useSession() {
    const [state, dispatch] = useContext(AuthContext);

    const verifyLogin = async () => {
        dispatch({ type: ACTIONS_USER.VERIFY_LOGIN, payload: await sessionData() })
    }

    return { state, verifyLogin};
}