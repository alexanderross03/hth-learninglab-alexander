let cart = []
const myStore = {
    lettuce: 1.0,
    tomato: 1.5,
    bacon: 2.5,
    buns: 2.0,
    avocado: 3.5,
    sourPatchKids: 2.5,
    mayo: 1.0
};
function addToCart(item){
    //add item to cart only if the item is in the store and if not return item out of stock
if (item in myStore){
    cart.push(item);
    console.log(`${item} added to cart.`);
}
else{
    console.log('Item Out of Stock');
};

}

function viewStoreItems() {
    console.log("Store Items:");
    for (const item in myStore) {
        console.log(`${item}: $${myStore[item].toFixed(2)}`);
    }
}

function viewCart(){
    //view the items that are in the users cart including the item and their price
    //also print out total cost
    if (cart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }
    let total = 0;
    console.log("Items in your cart:");
    for (const item of cart) {
        let price = myStore[item];
        console.log(`${item}: $${price.toFixed(2)}`);
        total += price;
    }
    console.log(`Total: $${total.toFixed(2)}`);

}
// Use Cart
addToCart('bacon');
addToCart('tomato');
addToCart('cereal'); // Should be out of stock

viewStoreItems();

viewCart();
