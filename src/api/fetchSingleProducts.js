const fetchSingleProduct = async (idProduct) => {
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products`)
        const json = await response.json();

        return json.find((item) => {return item.id == idProduct});
    } catch (e) {
        return {
            status: 400,
            msg: 'We could\'t find this product'
        }
    }
}

export default fetchSingleProduct;