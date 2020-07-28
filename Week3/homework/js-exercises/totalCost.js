'use strict';
let cartForParty = {
  pepsi: 2.5,
  cake: 10.75,
  plates: 5.15,
  chips: 7.66,
  pizza: 12.0,
};

function calculateTotalPrice(cartForParty) {
  let total = 0;
  for (const property in cartForParty) {
    // console.log(`${property}: ${cartForParty[property]}`);
    total += cartForParty[property];
  }
  return `"Total: ${total.toLocaleString('ja-DE', {
    style: 'currency',
    currency: 'EUR',
  })}"`;
}
console.log(calculateTotalPrice(cartForParty));
