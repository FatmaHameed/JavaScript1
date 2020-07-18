'use strict';
let myMealRecipes = {};
myMealRecipes.title = 'French Fries';
myMealRecipes.servings = 2;
myMealRecipes.ingredients = [
  '4 potatoes',
  '1/4 tsp salt and pepar',
  '5 cups of Oil',
  '1 sp katchup or myonize',
]; //these were trials before writing the code
/*console.log(myMealRecipes);
for (let recipe in myMealRecipes) {
  console.log(myMealRecipes[recipe]);
}*/ // It can be done by two ways: first way:
console.log('Meal name :' + ' ' + myMealRecipes.title);
console.log('Serves: ' + ' ' + myMealRecipes.servings);
console.log('Ingredients :' + ' ' + myMealRecipes.ingredients);

// second way a (using for loop)
console.log('Meal name:' + ' ' + myMealRecipes.title);
console.log('Serves:' + ' ' + myMealRecipes.servings);
console.log('Ingredients:');
for (let i = 0; i < myMealRecipes.ingredients.length; i++) {
  console.log(myMealRecipes.ingredients[i]);
}

// second way  b (using (while) loop)
console.log('Meal name:' + ' ' + myMealRecipes.title);
console.log('Serves:' + ' ' + myMealRecipes.servings);
console.log('Ingredients:');

let i = 0;
while (i < myMealRecipes.ingredients.length) {
  console.log(myMealRecipes.ingredients[i]);
  i++;
}
