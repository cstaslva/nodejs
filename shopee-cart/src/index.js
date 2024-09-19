import * as cartServices from "./services/cart.js";
import createItem from "./services/item.js";

const cart = [];

console.log("😃 Welcome to the your Shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartServices.addItem(cart, item1);
await cartServices.addItem(cart, item2);

await cartServices.removeItem(cart, item2);

await cartServices.displayCart(cart);

// console.log("Shopee cart total is:");
await cartServices.calculateTotal(cart);

// await cartServices.deleteItem(cart, item2.name);
// await cartServices.deleteItem(cart, item1.name);
// await cartServices.calculateTotal(cart);
