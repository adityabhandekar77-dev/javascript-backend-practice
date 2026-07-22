const users = [
    {
        name: "Aditya",
        age: 20
    },
    {
        name: "Rahul",
        age: 17
    },
    {
        name: "Sam",
        age: 22
    }
];


console.log(users[0].name);

users.forEach(user => {
    console.log(user.name);
});

const foundUser = users.find(user => user.name === "Sam");

console.log(foundUser);



const players = [
    { name: "Aditya", score: 850, active: true },
    { name: "Sam", score: 420, active: false },
    { name: "Alex", score: 1200, active: true },
    { name: "John", score: 650, active: true }
];



players.forEach(player => {
    console.log(`${player.name} - ${player.score}`);
});



const activePlayers = players.filter(player => player.active);

console.log("\nActive Players:");
console.log(activePlayers);



const foundPlayer = players.find(player => player.name === "Alex");

console.log(`\n${foundPlayer.name}'s score is ${foundPlayer.score}`);