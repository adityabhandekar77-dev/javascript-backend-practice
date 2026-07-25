const scores = [10, 20, 30];

const total = scores.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

console.log(total);


const games = [
    { title: "RDR2", hours: 85 },
    { title: "Cyberpunk 2077", hours: 42 },
    { title: "GTA V", hours: 60 },
    { title: "Portal 2", hours: 12 }
];

const totalPlaytime = games.reduce((acc, game) => acc + game.hours, 0);

console.log(totalPlaytime);