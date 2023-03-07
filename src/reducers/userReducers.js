import { initialValue } from "./user/getSession";

export const ACTIONS_USER = {
    VERIFY_LOGIN: 'verify_login',
    SET_ALL: 'set_all',
    SET_STATUS: 'set_status',
    SET_USER_ID: 'set_user_id',
    SET_ROLE: 'set_role'
}

export function userReducers(state, action) {
    switch (action.type) {
        case ACTIONS_USER.VERIFY_LOGIN:
            return{
                initialValue
            }
            break;
        case ACTIONS_USER.SET_ALL:
            return {
                ...state,
                loged: action.value[0],
                idUser: action.value[1],
                roleUser: action.value[2],
                token: action.value[3]
            }
        case ACTIONS_USER.SET_LOGED:
            return {
                ...state,
                loged: action.value
            }
            break;
        case ACTIONS_USER.SET_USER_ID:
            return {
                ...state,
                idUser: action.value
            }
            break;
        case ACTIONS_USER.SET_ROLE:
            return {
                ...state,
                roleUser: action.value
            }
            break;
        default:
            throw new Error('Invalid action');
    }
}