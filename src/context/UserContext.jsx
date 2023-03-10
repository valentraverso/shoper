import { useReducer, createContext } from "react";
import {userReducers} from './reducers/userReducers'
import sessionData from "./reducers/user/getSession";

export const AuthContext = createContext();

const initialValue = await sessionData();

export default function UserContext({ children }) {
  const [state, dispatch] = useReducer(userReducers, initialValue);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}