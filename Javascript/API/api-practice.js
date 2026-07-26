


async function getPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const posts = await response.json();

        console.log(posts[0].title);

    } catch (error) {
        console.log(error.message);
    }
}


async function createGame() {
    try {
        const newGame = {
            title: "BounceGame",
            body: "A paddle and a ball bounce game",
            playerId: 6
        };

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newGame)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const createdGame = await response.json();

        console.log(createdGame);

    } catch (error) {
        console.log(error.message);
    }
}

createGame();


const games = [
    { title: "Hades", rating: 9.3, completed: true },
    { title: "Control", rating: 8.1, completed: false },
    { title: "Disco Elysium", rating: 9.5, completed: true },
    { title: "Doom Eternal", rating: 8.8, completed: true },
    { title: "Death Stranding", rating: 8.4, completed: false }
];


const completedGames = games.filter(game => game.completed === true);


const completedTitles = completedGames.map(game100 => game100.title);


console.log(completedTitles);










