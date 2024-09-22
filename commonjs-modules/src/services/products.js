const products = {
    0: "mousepad",
    1: "fone",
    2: "mouse",
    3: "keyboard",
}

async function getProducts() {
    for(const property in products) {
        console.log(products[property]);
    };
};

async function getProduct1() {
    console.log(products[0]);
};

async function  getProduct2() {
    console.log(products[1]);
};

async function  getProduct3() {
    console.log(products[2]);
};

async function  getProduct4() {
    console.log(products[3]);
};

module.exports = {
    getProducts,
    getProduct1,
    getProduct2,
    getProduct3,
    getProduct4,
};
