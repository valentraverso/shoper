const loged = localStorage.getItem("userSession")
  ? true
  :
  false

const user = localStorage.getItem("userSession")
  ? JSON.parse(localStorage.getItem("userSession")).id
  : null

const role = localStorage.getItem("userSession")
  ? JSON.parse(localStorage.getItem("userSession")).role
  : null

const token = localStorage.getItem("userSession")
  ? JSON.parse(localStorage.getItem("userSession")).token
  : null

const initialValue = {
    loged: loged,
    idUser: null || user,
    roleUser: null || role,
    token: null || token,
}

export {initialValue}