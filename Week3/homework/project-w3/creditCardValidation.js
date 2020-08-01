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

  // write a function for checking if all characters are numbers (using regular expression)
  function isNumeric(creditNumber) {
    return /^-{0,1}\d+$/.test(creditNumber);
  }

  // write if statements to include all of above and validate the credit number
  if (isNumeric(creditNumber) === false) {
    return `Invalid! The input ${creditNumber} should contain only numbers!`;
  }
  if (digitCount(creditNumber) !== 16) {
    return `Invalid! The input ${creditNumber} should be 16 characters!`;
  }
  if (checkIfGreater(creditNumber) === false) {
    return `Invalid! The sum of the input ${creditNumber} should be more than 16`;
  }
  if (testSameDigit(creditNumber) === true) {
    return `Invalid! The input ${creditNumber} should contain at least 2 different types of numbers!`;
  }
  if (checkEvenLastDigit(lastDigit) === false) {
    return `Invalid! The final number of the input ${creditNumber} should be even!`;
  }

  if (
    digitCount(creditNumber) === 16 &&
    isNumeric(creditNumber) !== false &&
    testSameDigit(creditNumber) !== true &&
    checkEvenLastDigit(lastDigit) !== false &&
    checkIfGreater(creditNumber) !== false
  ) {
    return `Success! The input ${creditNumber} is a valid credit card number!`;
  }
}
