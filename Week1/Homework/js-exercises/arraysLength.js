'use strict';
const array1 = [3, { name: 'Fatma' }, true, 'Hello'];
const array2 = ['Fatma', 36, false, 'blue', 3, 'yes', { greet: 'hello' }];

console.log('The length of array1 is' + ' ' + array1.length);
console.log('The length of array2 is' + ' ' + array2.length);

if (array1.length === array2.length) {
  console.log('They are the same!');
} else {
  console.log('Two different sizes');
}
