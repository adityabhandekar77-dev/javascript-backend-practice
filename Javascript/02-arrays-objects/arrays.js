/*const numbers = [10, 20 , 40 , 30];

console.log(numbers);

console.log(numbers[0]);
console.log(numbers[2]);

console.log(numbers.length);

const games = ["GTA", "Minecraft", "CS2"];

games.push("Valorant");

console.log(games);

const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);

numbers.pop();

console.log(numbers);


const removed = numbers.pop();

console.log(removed);

const numbers = [20, 30, 40];

numbers.unshift(10);

numbers.shift();


// looping 


const numbers = [10, 20 , 30 , 40 , 50];
for(let i = 0; i< numbers.length; i++){
    console.log(numbers[i]);

}

for(const number of numbers){
    console.log(number);
}
*/
//exercise

const numbers = [12, 7, 20, 5, 18, 3, 10];

let largest = numbers[0];
let sum = 0;

console.log("All Numbers:");

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);

    sum += numbers[i];

    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("\nEven Numbers:");

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

console.log(`\nSum: ${sum}`);
console.log(`Largest: ${largest}`);




