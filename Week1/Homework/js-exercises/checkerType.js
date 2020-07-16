'use strict';
let myFirstName = 'Fatma';
let myLastName = 'Salah';
let myFavoriteThings = {
  favoriteColor: 'blue',
  favoriteSport: 'football',
  favoriteDrink: 'coffee',
};
let myInfo = {
  firstName: 'Fatma',
  lastName: 'Salah',
  originCountry: 'Yemen',
};

if (typeof myFirstName === typeof myLastName) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}

if (typeof myFirstName === typeof myInfo) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}

if (typeof myLastName === typeof myInfo) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}

if (typeof myLastName === typeof myFavoriteThings) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}

if (typeof myFirstName === typeof myFavoriteThings) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}

if (typeof myInfo === typeof myFavoriteThings) {
  console.log('SAME TYPE');
} else {
  console.log('Not the same');
}

console.log(typeof myInfo);
console.log(typeof myFirstName);

console.log(typeof myFirstName === typeof myInfo);
console.log(typeof myLastName === typeof myFirstName);
if (typeof myInfo !== typeof myFirstName) {
  console.log('Not the same');
} else {
  console.log('SAME TYPE');
}
