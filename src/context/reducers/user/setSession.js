export default async function setSession(state){
    const sessionToken = getCookie("session_tk");
    
    const fetchUser = await fetch('https://apimocha.com/shoper/users');
    const response = await fetchUser.json();

    const coincidence = response.find(item => item.session_tk === session_tk);

    if(sessionToken){
        return {
            ...state,
            loged: true,
            idUser: coincidence.id,
            roleUser: coincidence.role,
        }
    }
    else{
        return{
            state
        }
    }
}