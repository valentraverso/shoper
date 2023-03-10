import { getProductsCategory } from "../helpers/utils/utils";

const fetchProductsCategory = async (category) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        const json = await response.json();

        return getProductsCategory(json, category.toLowerCase());
    } catch (e) {
        console.log('Error While fetching category')

        return {
            status: 400,
            msg: 'We couldn\'t find results'
        }
    }
}

export default fetchProductsCategory;