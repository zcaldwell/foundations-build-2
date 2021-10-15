
import { foods } from './food.js';
import { renderFood } from './renderFruits.js';

const foodList = document.getElementById('food-list');

for (let food of foods){
    const foodListing = renderFood(food);
    foodList.append(foodListing);
}