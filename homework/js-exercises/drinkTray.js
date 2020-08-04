'use strict';
let drinkTray = [];
const drinkTypes = [' cola', ' lemonade', ' water'];

//create a function to count the number occurrence of the drink in the drinkTypes
const countDrinkType = function (arr, val) {
  return arr.reduce((acc, elem) => {
    return val === elem ? acc + 1 : acc;
  }, 0);
};

const visitors = 5;
const drinkPerVisitor = 2;
//create loop inside loop to push the drinks to drinkTray
for (let i = 0; i < visitors; i++) {
  for (let s = 0; s < drinkTypes.length; s++) {
    if (countDrinkType(drinkTray, drinkTypes[s]) < drinkPerVisitor) {
      drinkTray.push(drinkTypes[s]);
      break;
    }
  }
}
// logging the final phrase

console.log(`"Hey guys, I brought a${drinkTray}!" `);
