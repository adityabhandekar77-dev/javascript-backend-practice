function greet(name){
    console.log(`Hello ${name}!`);

}

greet("Aditya");
greet("Sam");

function add(a, b){
    return a + b;

}

let result = add(10, 30);
console.log(result);




function calculateSquare(number) {
    return number * number;
}

function isEven(number) {
    return number % 2 === 0;
}

function getLarger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let number = 40;

let squareResult = calculateSquare(number);
let evenResult = isEven(number);
let largerResult = getLarger(20, 30);

console.log(`Square of ${number}: ${squareResult}`);
console.log(`${number} is even? ${evenResult}`);
console.log(`Larger number: ${largerResult}`);

