const playerName = "Aditya";
let score = 850;
const minimumScore = 500;
const isBanned = false;


console.log("Player: ", playerName);
console.log("Score: ", score);

console.log("Checking eligibility....");

if (score >= minimumScore && !isBanned) {
    console.log(`${playerName} is eligible for the tournament!`);
} else {
    console.log(`${playerName} is not eligible for the tournament!`);
}

