const fetchAllProducts = async () => {
    try {
        const fetchApi = await fetch(`${import.meta.env.VITE_API_URL}/products`);
        const json = await fetchApi.json();

        return json;
    } catch (e) {
        console.log('Error While fetching category')

        return {
            status: 400,
            msg: 'We couldn\'t find results'
        }
    }
}

export default fetchAllProducts;