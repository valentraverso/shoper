export const ACTIONS_USER = {
    SET_USER_ID: 'set_user_id',
    SET_ROLE: 'set_role'
}

export function reducer({state, action}){
    switch(action.type){
        case 'set_user_id':
            console.log('user set');
            break;
        case 'set_role':
            console.log('role set');
            break;
        default:
            throw new Error('Invalid action');
    }
}