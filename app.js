
import { food } from './food.js';
import { renderFood } from './renderFruits.js';

const foodList = document.getElementById('food-list');

for (let foods of food){
    const foodListing = renderFood(foods);
    foodList.append(foodListing);
}