// ações do carrinho:
// - adicionar item
// - deletar item
// - remover item
// - calcular total preço

async function addItem(userCart, item) {
    userCart.push(item);
};

async function calculateTotal(userCart) {
    console.log("\n💸 Shopee Cart Total is:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`R$ ${result}`);
};

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    };
};

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((product) => product.name === item.name);
    
    if(indexFound == -1) {
        console.log("Item não encontrado...");
        return;
    };

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    };

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
    };
};

async function displayCart(userCart) {
    console.log("\n🛒 Shopee Cart List:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`);
    });
};

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
};