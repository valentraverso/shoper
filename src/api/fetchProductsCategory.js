
const API_URL = 'https://apimocha.com/shoper/products';


const fetchProductsCategory = async (category) => {
    try {
        const fetchApi = await fetch(API_URL);
        const json = fetchApi.json();

        return getProductsCategory(await json, category.toLowerCase());
    } catch (e) {
        console.log('Error While fetching category')

        return {
            status: 400,
            msg: 'We couldn\'t find results'
        }
    }
}

export default fetchProductsCategory;