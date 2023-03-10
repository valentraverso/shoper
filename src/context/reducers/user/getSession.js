import { getCookie } from "react-use-cookie";
import fetchUserByToken from "../../api/fetchUserByToken";


export default async function sessionData(){
  const userToken = getCookie('session_token');

  const loged = userToken || userToken.length > 0
    ? true
    :
    false

  const { id = null, role = null, token = null } = userToken &&
    await fetchUserByToken(userToken)

  const data = {
    loged: loged,
    idUser: id,
    roleUser: role,
    token: token,
  }

  return {
    ...data
  }
}