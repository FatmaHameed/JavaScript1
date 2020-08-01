'use strict';
// start with the function to validate the credit number
function validateCreditNumber(creditNumber) {
  //write a function for counting the number of digits to be equal to 16
  function digitCount(creditNumber) {
    let chars = creditNumber.split('');
    let countChars = chars.length;

    console.log(chars);
    console.log(countChars);
    return countChars;
  }
}

console.log(validateCreditNumber('6666666666661667'));
console.log(validateCreditNumber('4444444444444444'));
console.log(validateCreditNumber('a92332119c011112'));
console.log(validateCreditNumber('666666666666166'));
console.log(validateCreditNumber('0000000000000008'));
console.log(validateCreditNumber('0000000000.00008'));
console.log(validateCreditNumber('6666666666661666'));
