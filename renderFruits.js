
export function renderFood(food) {
    const foodList = document.createElement('li');
    foodList.classList.add('food-list');

    
    const foodImg = document.createElement('img');
    foodImg.src = food.img;
    
    const foodHeader = document.createElement('h3');
    foodHeader.textContent = food.name;
   
    
    foodList.append(foodImg, foodHeader);
    return foodList;
}
