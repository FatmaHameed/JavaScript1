'use strict';
let drinkTray = [];
const drinkTypes = [' cola', ' lemonade', ' water'];

const countDrinkType = function (arr, val) {
  return arr.reduce((acc, elem) => {
    return val === elem ? acc + 1 : acc;
  }, 0);
};

for (let i = 0; i < 5; i++) {
  for (let s = 0; s < drinkTypes.length; s++) {
    if (countDrinkType(drinkTray, drinkTypes[0]) < 2) {
      drinkTray.push(drinkTypes[0]);
    } else if (countDrinkType(drinkTray, drinkTypes[1]) < 2) {
      drinkTray.push(drinkTypes[1]);
    } else if (countDrinkType(drinkTray, drinkTypes[2]) < 1) {
      drinkTray.push(drinkTypes[2]);
    }
  }
}

console.log(`"Hey guys, I brought a${drinkTray}!" `);
