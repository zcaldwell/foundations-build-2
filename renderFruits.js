
export function renderFood(food) {
    const foodList = document.createElement('li');
    foodList.classList.add('food-item');

    
    const foodImg = document.createElement('img');
    foodImg.src = food.img;
    
    const foodSpan = document.createElement('span');
    foodSpan.textContent = food.name;
    foodSpan.classList.add('food-name');
   
    
    foodList.append(foodImg, foodSpan);
    return foodList;
}
