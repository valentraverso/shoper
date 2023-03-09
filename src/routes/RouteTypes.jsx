import { Navigate } from "react-router-dom";
import useSession from "../hooks/useSession";

export function PrivateRoutes({ children }) {
    const {state} = useSession();

    return (
        <>
            {
                state.loged ?
                    children
                    :
                    <Navigate to={'/login'} replace={true} />
            }
        </>
    )
}

export function ProhibitedRoutes({ children }) {
    const {state} = useSession();

    return (
        <>
            {
                state.loged ?
                    <Navigate to={'/user/profile'} replace={true} />
                    :
                    children
            }
        </>
    )
}