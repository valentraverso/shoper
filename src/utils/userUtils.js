export const loginUserValidate = async (emailForm, passwordForm) => {
    const fetchUser = await fetch('https://apimocha.com/shoper/users');
    const response = await fetchUser.json();

    const coincidence = response.find(item => item.email === emailForm && item.password === passwordForm);

    if(coincidence){
        const sessionData = {
            id: coincidence.id,
            role: coincidence.role,
            token: coincidence.token,
        }
        localStorage.setItem("userSession", JSON.stringify(sessionData))
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
    localStorage.removeItem("userSession");
}