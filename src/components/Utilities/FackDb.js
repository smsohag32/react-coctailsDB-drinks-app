
// get localStorage data 
const getShoppingCart = () =>{
    let shoppingCart ={};
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


// set localStorage data

const addToDb = (id) =>{
    // ekhane shoppingCart get kora function call kora hoisy
    let shoppingCart = getShoppingCart();

    const quantity = shoppingCart[id];
    if(!quantity){
        shoppingCart[id] = 1;
    }else{
        const newQuantity = quantity +1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFormDb = (id) => {
    const shoppingCart = getShoppingCart();
    if(id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}


export {
    addToDb,
    removeFormDb,
    getShoppingCart
}