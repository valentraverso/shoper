
const API_URL = 'https://apimocha.com/shoper/products';


const fetchProducts = async () => {
    try {
        const fetchApi = await fetch(API_URL);
        const json = fetchApi.json();

        return await json;
    } catch (e) {
        console.log('Error While fetching category')

        return{
            status: 400,
            msg: 'We couldn\'t find results'
        }
    }
}

export default fetchProducts;