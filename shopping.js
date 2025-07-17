module.exports = {
     addToCart,
     getStoreItems, 
     getCartContents
    };

let cart = [];
const myStore = {
  lettuce: 1.0,
  tomato: 1.5,
  bacon: 2.5,
  buns: 2.0,
  avocado: 3.5,
  sourpatchkids: 2.5,
  mayo: 1.0
};

// addToCart now returns a message
function addToCart(item) {
  if (item in myStore) {
    cart.push(item);
    return `${item} added to cart.`;
  } else {
    return `Item "${item}" is out of stock.`;
  }
}

// getStoreItems returns an array of {item, price}
function getStoreItems() {
  return Object.entries(myStore).map(([item, price]) => ({ item, price }));
}

// getCartContents returns { items: [ {item, price}, … ], total }
function getCartContents() {
  const items = cart.map(item => ({ item, price: myStore[item] }));
  const total = items.reduce((sum, { price }) => sum + price, 0);
  return { items, total };
}


// 1. Add to cart
console.log(addToCart('bacon'));   // “bacon added to cart.”
console.log(addToCart('tomato'));  // “tomato added to cart.”
console.log(addToCart('cereal'));  // “Item "cereal" is out of stock.”

// 2. List store items
console.log("Store Items:");
getStoreItems().forEach(({ item, price }) => {
  console.log(`  • ${item}: $${price.toFixed(2)}`);
});

// 3. View cart
const { items, total } = getCartContents();
if (items.length === 0) {
  console.log("Your cart is empty.");
} else {
  console.log("Items in your cart:");
  items.forEach(({ item, price }) => {
    console.log(`  – ${item}: $${price.toFixed(2)}`);
  });
  console.log(`Total: $${total.toFixed(2)}`);
}
