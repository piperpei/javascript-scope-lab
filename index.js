// Global Scope Variables

let burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake'; 

// Adding a New Burger

function addBurger() {
    let newBurger = 'Flatburger'; 
    // Adding to Array 
    burgers.push(newBurger); 
}

addBurger();

if (true) {
    // Block Scope and Push 
    let anothernewBurger = 'Maple Bacon Burger'; 
    burgers.push(anothernewBurger);

    // Change Featured Drink
    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }

    changeFeaturedDrink(); 

}

console.log(burgers);
console.log(featuredDrink); 
