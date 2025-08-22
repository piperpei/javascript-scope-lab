// Global Scope Variables

const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake'; 

// Adding a New Burger

function addBurger() {
    const newBurger = 'Flatburger'; 
    // Adding to Array 
    burgers.push(newBurger); 
}

addBurger();

if (true) {
    // Block Scope and Push 
    const anotherNewBurger = 'Maple Bacon Burger'; 
    burgers.push(anotherNewBurger);

    // Change Featured Drink
    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }

    changeFeaturedDrink(); 

}

console.log(burgers);
console.log(featuredDrink); 
