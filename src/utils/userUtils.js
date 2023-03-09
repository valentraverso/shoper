import { setCookie } from "react-use-cookie";

export const loginUserValidate = async (emailForm, passwordForm) => {
    const fetchUser = await fetch('https://apimocha.com/shoper/users');
    const response = await fetchUser.json();

    const coincidence = response.find(item => item.email === emailForm && item.password === passwordForm);

    if(coincidence){
        setCookie('session_token', token.toString(), {
            days: 100,
            path: '/',
        })

        return {
            status: 200,
            loged: true,
            msg: 'Loged!',
            userInfo: coincidence
        }
    }else{
        return{
            status: 400,
            loged: false,
            msg: 'Email or password incorrect!'
        }
    }
}

export const logoutUser = () => {
    setCookie('session_token', '', {
        days: 0,
        path: '/'
      })
}