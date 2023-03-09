import { useContext, useState } from "react";
import { AuthContext } from "../context/UserContext";
import { ACTIONS_USER } from "../reducers/userReducers";
import sessionData from '../reducers/user/getSession.js';

export default function useSession() {
    const [state, dispatch] = useContext(AuthContext);

    const verifyLogin = async () => {
        dispatch({ type: ACTIONS_USER.VERIFY_LOGIN, payload: await sessionData() })
    }

    return { state, verifyLogin };
}