async function deleteGame() {
    try {
        const response = await fetch(
            "http://localhost:3000/games/2",
            {
                method: "DELETE"
            }
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

deleteGame();