'use strict';
let mark = 89.7; // declare and initiate a variable of mark
let fullMark = 100; // declare and initiate a variable of fullMark, in case the fullMark was changed, so the percentage work correctly

//here I made a function that calculate the percentage exactly as it is with the mark, so if it is a decimal, ex. 89.9, so the percentage will be 89.9%
function scoreToPercentage() {
  return (mark / fullMark) * 100;
}
console.log(`${scoreToPercentage(mark)}%`);
