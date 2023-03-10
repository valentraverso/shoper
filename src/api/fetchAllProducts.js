import { getProductsCategory } from "../helpers/utils/utils";
const API_URL = 'https://apimocha.com/shoper/products';

const fetchProducts = async (type, parameter = '') => {
    try {
        const fetchApi = await fetch(`${API_URL}`);
        const json = await fetchApi.json();

        switch(type){
            case 'all': 
                return json;
            case 'category':
                return getProductsCategory(json, parameter.toLowerCase());
            case 'product':
                return response.find(({title}) => {return title == parameter;})
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