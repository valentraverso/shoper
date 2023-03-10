export const ACTIONS_USER = {
    VERIFY_LOGIN: 'verify_login',
}

export function userReducers(state, action) {
    console.log(action.payload)
    switch (action.type) {
        case ACTIONS_USER.VERIFY_LOGIN:
            const { loged, idUser: id, roleUser: role, token } = action.payload;
            return {
                ...state,
                loged: loged,
                idUser: id,
                roleUser: role,
                token: token,
            }
        default:
            return {
                ...state,
                loged,
                idUser,
                roleUser,
                token
            };
    }
}