import { getProductsCategory } from "../utils/utils";
const API_URL = 'https://apimocha.com/shoper/products';

const fetchProducts = async (category) => {
    try {
        const fetchApi = await fetch(API_URL);
        const json = await fetchApi.json();

        if(category !== ''){
           return getProductsCategory(json, category.toLowerCase());
        }else{
            return json;
        }
    } catch (e) {
        console.log('Error While fetching category')

        return{
            status: 400,
            msg: 'We couldn\'t find results'
        }
    }
}

export default fetchProducts;