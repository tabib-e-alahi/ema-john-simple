import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async()=>{
    const loadProducts= await fetch('products.json');
    const products= await loadProducts.json()

    // if cart data is in data base, you have to use async await 

    const storedCart=getShoppingCart();
    const saveCart=[];
    // console.log(products);
    for (const id in storedCart){
        const addedProduct=products.find(pd=>pd.id===id)
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            saveCart.push(addedProduct);

        }
    }
    return saveCart;
}

export default cartProductsLoader;