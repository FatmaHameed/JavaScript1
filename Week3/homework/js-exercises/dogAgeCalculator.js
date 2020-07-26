'use strict';
function calculateDogAge(age) {
  let puppyAge = age * 7;
  return `Your doggie is ${puppyAge} years old in dog years!`;
}

calculateDogAge();

console.log(calculateDogAge(1));
console.log(calculateDogAge(2));
console.log(calculateDogAge(3));
