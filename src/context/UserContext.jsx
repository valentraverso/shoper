import { useReducer, createContext } from "react";

const initialValue = {
    "idUser": null,
    "roleUser": null,
}

export const CreateUserContext = createContext();

export default function UserContext({children}){
    const [state, dispatch] = userReducer(reducer, initalValue);

    return (
        <CreateUserContext.Provider value={[state, dispatch]}>
            {children}
        </CreateUserContext.Provider>
    )
}