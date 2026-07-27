const newGame = {
    title: "Prey",
    rating: 8.7
};

async function createGame() {
    try {
        const response = await fetch("http://localhost:3000/games", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newGame)
        });

        const data = await response.text();

        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

createGame();