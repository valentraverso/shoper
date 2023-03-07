import { Navigate } from "react-router-dom";
import useSession from "../hooks/useSession";

export default function PrivateRoutes({ children }) {
    const [state] = useSession();

    console.log(state)
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