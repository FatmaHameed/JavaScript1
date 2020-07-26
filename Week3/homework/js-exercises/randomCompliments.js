'use strict';
function giveCompliment(myName) {
  let compliments = [
    'awesome',
    'amazing',
    'intelligent',
    'great',
    'comprehensive',
    'supersmart',
    'perfect',
    'imaginative',
    'creative',
    'honest',
  ];

  let randomCompliments =
    compliments[Math.floor(Math.random() * compliments.length)];
  return `You are ${randomCompliments}, 
  ${myName}!`;
}

giveCompliment('Fatma');
giveCompliment('Fatma');
giveCompliment('Fatma');

console.log(giveCompliment('Fatma'));
console.log(giveCompliment('Fatma'));
console.log(giveCompliment('Fatma'));
