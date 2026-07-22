const numbers = [5, 12, 8, 20, 3, 15, 6];


console.log("All Numbers:");

numbers.forEach((number)=>{
    console.log(number);
});

const doubled = numbers.map(number => number * 2);
console.log("Doubled:");
console.log(doubled);

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers");
console.log(evenNumbers);

const result = numbers.find(number => number > 10);
console.log("First number greater than 10:");
console.log(result);




