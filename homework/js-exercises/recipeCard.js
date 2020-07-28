'use strict';
let myMealRecipes = {};
myMealRecipes.title = 'French Fries';
myMealRecipes.servings = 2;
myMealRecipes.ingredients = [
  '4 potatoes',
  '1/4 tsp salt and pepar',
  '5 cups of Oil',
  '1 sp katchup or myonize',
]; // // Using for loop
console.log('Meal name:' + ' ' + myMealRecipes.title);
console.log('Serves:' + ' ' + myMealRecipes.servings);
console.log('Ingredients:');
for (let i = 0; i < myMealRecipes.ingredients.length; i++) {
  console.log(myMealRecipes.ingredients[i]);
}

// Using (while) loop)
console.log('Meal name:' + ' ' + myMealRecipes.title);
console.log('Serves:' + ' ' + myMealRecipes.servings);
console.log('Ingredients:');

let i = 0;
while (i < myMealRecipes.ingredients.length) {
  console.log(myMealRecipes.ingredients[i]);
  i++;
}
