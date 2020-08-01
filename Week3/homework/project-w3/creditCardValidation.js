'use strict';
// start with the function to validate the credit number
function validateCreditNumber(creditNumber) {
  //write a function for counting the number of digits to be equal to 16
  function digitCount(creditNumber) {
    let chars = creditNumber.split('');
    let countChars = chars.length;
    return countChars;
  }

  //Write a function for checking that at least two different numbers should be represented
  function testSameDigit(creditNumber) {
    var first = creditNumber % 10;
    while (creditNumber) {
      if (creditNumber % 10 !== first) return false;
      creditNumber = Math.floor(creditNumber / 10);
    }
    return true;
  }

  //write a function for last number must be even

  let lastDigit = creditNumber[creditNumber.length - 1];
  // console.log('The last digit of ', creditNumber, ' is ', lastDigit);
  function checkEvenLastDigit(lastDigit) {
    if (lastDigit % 2 !== 0) {
      return false;
    }
  }

  // Write a function to check out the sum of all the numbers must be greater than 16

  let splitDigits = creditNumber.toString().split('').map(Number);
  // console.log(splitDigits);
  let sumDigit = splitDigits.reduce((a, b) => a + b);
  // console.log(sumDigit);
  function checkIfGreater(creditNumber) {
    if (sumDigit <= 16) {
      return false;
    } else {
      return true;
    }
  }
}
