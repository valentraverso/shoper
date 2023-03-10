import { setCookie } from "react-use-cookie";

export const loginUserValidate = async (emailForm, passwordForm) => {
    try {
        const fetchUser = await fetch('https://apimocha.com/shoper/users');
        const json = await fetchUser.json();

        const { token } = await json.find(item => item.email === emailForm && item.password === passwordForm);


        if (token) {
            setCookie('session_token', token.toString(), {
                days: 100,
                path: '/',
            })

            return {
                status: 200,
                loged: true,
                msg: 'Loged!'
            }

        }
    } catch (e) {
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