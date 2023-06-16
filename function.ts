import { v4 as uuidv4 } from 'uuid';

interface Item {
  id: string;
  name: string;
  price: number;
}

interface User {
  id: string;
  name: string;
  cart: Item[];
}

function createUser(name: string): User {
  return {
    id: uuidv4(),
    name,
    cart: [],
  };
}

function createItem(name: string, price: number): Item {
  return {
    id: uuidv4(),
    name,
    price,
  };
}

function addToCart(item: Item, user: User): void {
  user.cart.push(item);
}

function removeFromCart(item: Item, user: User): void {
  user.cart = user.cart.filter((i) => i.id !== item.id);
}

function cartTotal(user: User): number {
  return user.cart.reduce((total, item) => total + item.price, 0);
}

function printCart(user: User): void {
  console.log(`User: ${user.name}`);
  console.log('Cart Items:');
  user.cart.forEach((item) => {
    console.log(`- ${item.name}: $${item.price}`);
  });
}

const user = createUser('Ben');

const chicken = createItem('chicken', 5);
const eggs = createItem('eggs', 4);
const milk = createItem('milk', 3);

addToCart(chicken, user);

addToCart(eggs, user);

addToCart(milk, user);

console.log('User\'s Cart after adding 3 milk:');
printCart(user);
console.log('Cart Total:', cartTotal(user));

removeFromCart(eggs, user);
printCart(user);
