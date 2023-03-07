import { useReducer, createContext } from "react";
import { userReducers } from "../reducers/userReducers";
import { initialValue } from "../reducers/user/getSession";

export const CreateUserContext = createContext();

export default function UserContext({ children }) {
  const [state, dispatch] = useReducer(userReducers, initialValue);

  return (
    <CreateUserContext.Provider value={[state, dispatch]}>
      {children}
    </CreateUserContext.Provider>
  )
}