'use strict';
let mark = 89.7; // declare and initiate a variable of mark
let fullMark = 100; // declare and initiate a variable of fullMark, in case the fullMark was changed, so the percentage work correctly

//here I made a function that calculate the percentage exactly as it is with the mark, so if it is a decimal, ex. 89.9, so the percentage will be 89.9%
function scoreToPercentage() {
  return (mark / fullMark) * 100;
}
console.log(`${scoreToPercentage(mark)}%`);

//here I wrote another function that round the decimal to nearest value to be used with if statements, ex. 89.9 become: 90% and be grade A
function roundPercentage() {
  return Math.round((mark / fullMark) * 100);
}

// here I declare another variable of grade and initiate it with string value
let grade = '';
// here I wrote if statements to put the grade value
if (roundPercentage(mark) >= 90 && roundPercentage(mark) <= 100) {
  grade = 'A';
} else if (roundPercentage(mark) >= 80 && roundPercentage(mark) <= 89) {
  grade = 'B';
} else if (roundPercentage(mark) >= 70 && roundPercentage(mark) <= 79) {
  grade = 'C';
} else if (roundPercentage(mark) >= 60 && roundPercentage(mark) <= 69) {
  grade = 'D';
} else if (roundPercentage(mark) >= 50 && roundPercentage(mark) <= 59) {
  grade = 'D';
} else {
  grade = 'E';
}
// logging if statements; the grade converter
console.log(`You got a ${grade} (${scoreToPercentage(mark)}%)!`);
