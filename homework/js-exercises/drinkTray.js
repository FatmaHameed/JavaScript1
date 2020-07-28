'use strict';
let drinkTray = [];
const drinkTypes = [' cola', ' lemonade', ' water'];
// for (let i = 0; i < 5; i++) {
//   if ((i = 1)) {
//     drinkTray.push(drinkTypes[0]);
//   }
//   if ((i = 2)) {
//     drinkTray.push(drinkTypes[0]);
//   }
//   if ((i = 3)) {
//     drinkTray.push(drinkTypes[1]);
//   }
//   if ((i = 4)) {
//     drinkTray.push(drinkTypes[1]);
//   }
//   if ((i = 5)) {
//     drinkTray.push(drinkTypes[2]);
//   }
// }

// drinkTypes.splice(1, 0, 'cola', 'lemonade');
// drinkTypes.splice(1, 0, 'cola ', 'lemonade ');

// console.log(loopDrink);
// drinkTray = drinkTypes.push('lemonade');

for (let i = 0; i < 5; i++) {
  // if (i < drinkTypes.length) {
  //   drinkTray.push(drinkTypes[i]);
  // }
  // if (i < 5) {
  //   drinkTray.push(drinkTypes[i - drinkTypes.length]);
  // }
  if (i > drinkTypes.length) {
    drinkTray.push(drinkTypes[i]) + drinkTypes[i - drinkTypes.length];
  }
}

// // console.log(loopDrink);

console.log(drinkTray);

console.log('"' + 'Hey guys, I brought a ' + drinkTray + '!' + '"');
