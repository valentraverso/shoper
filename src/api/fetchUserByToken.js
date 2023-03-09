const API_URL = 'https://apimocha.com/shoper/users';

const fetchUserByToken = async (tokenCookie) => {
    try {
        const fetchApi = await fetch(API_URL);
        const json = await fetchApi.json();

        return json.find(({token}) => token === tokenCookie);
    } catch (e) {
        console.log('Error While fetching user')

        return{
            status: 400,
            msg: 'We couldn\'t find results'
        }
    }
}

export default fetchUserByToken;