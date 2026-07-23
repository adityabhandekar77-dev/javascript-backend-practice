const user = {
    name: "Aditya",
    age: 19
};

const jsonData = JSON.stringify(user);

console.log(jsonData);


const jsonData = '{"name":"Aditya","age":19}';

const user = JSON.parse(jsonData);

console.log(user.name);



const game = {
    title: "GTA V",
    price: 1999,
    multiplayer: true
};

const jsonData = JSON.stringify(game);

console.log(jsonData);

const parsedGame = JSON.parse(jsonData);

console.log(parsedGame.title);


const weapons = ["Sword", "Bow", "Axe"];

const moreWeapons = [...weapons, "Spear", "Hammer"];

console.log(moreWeapons);


const inventory = ["Potion", "Key", "Map"];

const expandedInventory = [...inventory, "GOLD", "SHIELD"];


const car = {
    brand: "BMW",
    model: "M3",
    speed: 250
};

const modifiedCar = {
    ...car,
    speed: 290,
    hasTurbo: true
};


function findMax(...numbers) {
    return Math.max(...numbers);
    
    
}

console.log(findMax(12, 55, 7, 89, 34));


const movie = {
    title: "Fight Club",
    director: {
        name: "David Fincher"
    }
};

console.log(movie.director?.name);

console.log(movie.actor?.name);





