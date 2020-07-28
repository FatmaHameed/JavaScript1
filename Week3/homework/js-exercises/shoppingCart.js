'use strict';
let shoppingCart = ['bananas', ' milk'];

function addToShoppingCart(groceryItem) {
  shoppingCart.push(groceryItem);

  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    console.log(shoppingCart[i]);
  }
  return `"You bought${shoppingCart}!"`;
}
console.log(addToShoppingCart(' Chocolate'));
console.log(addToShoppingCart(' Waffle'));
console.log(addToShoppingCart(' tea'));
