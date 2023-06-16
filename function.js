"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

const uuid_1 = require("uuid");

function createUser(name, age) {
    const id = uuid_1.v4();
    return { id, name, age, cart: [] };
}

function createItem(name, price, description) {
    const id = uuid_1.v4();
    return { id, name, price, description };
}

const addToCart = (item, user) => user.cart.push(item);

const removeFromCart = (item, user) => {
    user.cart = user.cart.filter(cartItem => cartItem.id !== item.id);
};

const cartTotal = user => user.cart.reduce((total, item) => total + item.price, 0);

const printCart = user => {
    console.log(`User: ${user.name}`);
    console.log('Cart Items:');
    user.cart.forEach(item => console.log(`- ${item.name}: $${item.price}`));
};

const user = createUser('Ben', 26);
addToCart(createItem('burgers', 15, 'Bubba Burgers'), user);
printCart(user);
addToCart(createItem('cheese', 4, 'Craft singles'), user);
printCart(user);
addToCart(createItem('buns', 5, 'Generic burger buns'), user);
console.log('User\'s Cart after adding 3 buns:');
printCart(user);
console.log('Cart Total:', cartTotal(user));
removeFromCart(createItem('cheese', 4, 'Craft singles'), user);
printCart(user);
