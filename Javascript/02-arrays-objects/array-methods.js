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



const prices = [100, 200, 300, 400];

const discountedPrices = prices.map(price => price * 0.90);
{
    console.log(`Original prices: ${prices}`);
    console.log(`Discounted prices: ${discountedPrices}`);

};


const ages = [12, 18, 21, 15, 25, 17, 30];

const adults = ages.filter(age => age >=18);
    console.log(`Adults: ${adults}`);


const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2500 }
];


const product = products.find(product => product.id === 2);
console.log(product);
console.log(`Product: ${product.name}`)
console.log(`Price: ${product.price}`)


const students = [
    { name: "Aditya", marks: 85 },
    { name: "Rahul", marks: 42 },
    { name: "Aman", marks: 76 },
    { name: "Riya", marks: 35 },
    { name: "Neha", marks: 91 }
];

const passedStudents = students.filter(passedStudents=> passedStudents.marks >= 50);

const passedNames = passedStudents.map(passedNames => passedNames.name);

console.log(passedStudents);
console.log(passedNames);


function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    const name = "Aditya";

    callback(name);
}

processUser(greet);

function calculate(a, b, operation){

}


function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log(calculate(10, 5, add));



function calculate(a, b, callback){
    return callback(a, b);

}

function mul(a,b){
    return a*b;

}
console.log(calculate(10, 5, mul));


function getProduct(callback){

    setTimeout(() => {
        const product ={
            name: "Keyboard",
            price: 2500
        };

        callback(product);
        
    },2000);
}


    getProduct((product)=>{
        console.log(product.name);
        console.log(product.price);
    });

    const promise = new Promise((resolve, reject)=>{

    });


    function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = false;

            if (success) {
                resolve("User found");
            } else {

                reject("User not found!");
                
            }

        }, 2000);

    });
}

getUser()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });



