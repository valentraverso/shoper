const fetchSingleProduct = async (idProduct) => {
    try{
        const response = await fetch(`${import.meta.env.API_URL}/products/${idProduct}`)
        return response.json();
    } catch (e) {
        return {
            status: 400,
            msg: 'We could\'t find this product'
        }
    }
}

export default fetchSingleProduct;