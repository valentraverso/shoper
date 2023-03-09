import { getCookie} from "react-use-cookie";
import fetchUserByToken from "../../api/fetchUserByToken";

const userToken = getCookie('session_token');

const loged = userToken
  ? true
  :
  false

const { id = null, role = null, token = null } = userToken &&
  await fetchUserByToken(userToken)

const initialValue = {
  loged: loged,
  idUser: id,
  roleUser: role,
  token: token,
}

export { initialValue }