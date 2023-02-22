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

const getCart = (prodArr) => {
    const JsonCart = JSON.parse(localStorage.getItem('cart'));

    const filterById = (obj) => {
        if (JsonCart.find(product => product.idProduct === obj.id)) {
            return true
        } else {
            return false;
        }
    }
    const arr = prodArr.filter(filterById);

    const newArrProduct = [];

    arr.map((item, index) => {
        const actualProduct = JsonCart.find(product => product.idProduct == item.id);
        
        const quantity = actualProduct.quantity;
        const totalPrice = item.price * quantity;

        newArrProduct.push({ ...item, totalPrice, quantity })
    })

    return newArrProduct;
}

const getQuantityCart = () => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));

    const quantity = cartStorage.reduce((accumulator, current) => accumulator + current.quantity, 0);

    return quantity;
}

export { localStorage, AddProduct, getCart, getQuantityCart, RestProduct, DeleteProductCart };