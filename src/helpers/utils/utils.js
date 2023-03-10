import fetchAllProducts from "../../api/fetchAllProducts";
const localStorage = window.localStorage;

const AddProduct = (idProduct, quantity) => {
    if (quantity === 0) {
        return;
    }

    if (localStorage.cart !== undefined) {
        const cartStorage = JSON.parse(localStorage.cart);

        const cart = [];

        cartStorage.map((item) => {
            if (item.idProduct === idProduct) {
                cart.push({ 'idProduct': idProduct, 'quantity': item.quantity + quantity });
            } else {
                cart.push(item);
            }
        })

        const checkExistence = cart.filter(item => item.idProduct === idProduct);

        if (checkExistence.length <= 0) {
            cart.push({ "idProduct": idProduct, "quantity": quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        return;
    }
    const cart = [{ "idProduct": idProduct, "quantity": quantity },];

    localStorage.setItem('cart', JSON.stringify(cart));
    
    return;
}

const RestProduct = (idProduct, quantity) => {
    if (localStorage.cart !== undefined) {
        const cartStorage = JSON.parse(localStorage.cart);

        const cart = [];

        cartStorage.map((item) => {
            if (item.idProduct === idProduct) {
                if(item.quantity - quantity === 0){
                    return;
                }
                cart.push({ 'idProduct': idProduct, 'quantity': item.quantity - quantity });
            } else {
                cart.push(item);
            }
        })

        localStorage.setItem('cart', JSON.stringify(cart));

        return;
    }
}

const DeleteProductCart = (idProduct) => {
    if (localStorage.cart !== undefined) {
        const cartStorage = JSON.parse(localStorage.cart);

        const cart = [];

        cartStorage.map((item) => {
            if (item.idProduct === idProduct) {
                    return;     
            } else {
                cart.push(item);
            }
        })

        localStorage.setItem('cart', JSON.stringify(cart));

        return;
    }
}

const getCart = async () => {
    const JsonCart = JSON.parse(localStorage.getItem('cart'));

        const productsObj = await fetchAllProducts();

        const filterById = (obj) => {
            if (JsonCart.find(product => product.idProduct === obj.id)) {
                return true
            } else {
                return false;
            }
        }
        const arr = productsObj.filter(filterById);
    
        const cart = [];
    
        arr.map((item) => {
            const actualProduct = JsonCart.find(product => product.idProduct == item.id);
            
            const quantity = actualProduct.quantity;
            const totalPrice = item.price * quantity;
    
            cart.push({ ...item, totalPrice, quantity })
        })

    return cart;
}

const getQuantityCart = () => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));

    if(cartStorage === null) { 
        return 0;
    }

    const quantity = cartStorage.reduce((accumulator, current) => accumulator + current.quantity, 0);

    return quantity;
}

const getProductsCategory = (prodArr, catProduct) => {
    const response = prodArr.filter(product => product.category === catProduct);

    return response;
}

export { localStorage, AddProduct, getCart, getQuantityCart, RestProduct, DeleteProductCart, getProductsCategory };