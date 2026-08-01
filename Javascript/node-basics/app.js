import "dotenv/config";
import express from "express";
import pool from "./database/db.js";


const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[REQUEST] ${req.method} ${req.url}`);

    next();
});

const games = [
    { id: 1, title: "Hades", rating: 9.3 },
    { id: 2, title: "Max Payne", rating: 9.0 },
    { id: 3, title: "Dishonored", rating: 8.8 }
];

app.get("/", (req, res) => {
    res.send("My first Express server is running!");
});

app.get("/games", (req, res) => {
    const { minRating, search } = req.query;

    let result = games;

    if (minRating) {
        result = result.filter(
            game => game.rating >= Number(minRating)
        );
    }

    if (search) {
        result = result.filter(
            game => game.title
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }

    res.json(result);
});

app.get("/games/:id", (req, res) => {
    const id = Number(req.params.id);

    const game = games.find(game => game.id === id);

    res.json(game);
});

app.get("/db-test", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM games ORDER BY id;"
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
});

app.post("/games", (req, res) => {
    const { title, rating } = req.body;

    if (!title || rating === undefined) {
        return res.status(400).json({
            message: "Title and rating are required"
        });
    }

    if (typeof title !== "string") {
        return res.status(400).json({
            message: "Title must be a string"
        });
    }

    if (typeof rating !== "number" || rating < 0 || rating > 10) {
        return res.status(400).json({
            message: "Rating must be a number between 0 and 10"
        });
    }

    const newGame = {
        id: games.length + 1,
        title,
        rating
    };

    games.push(newGame);

    res.status(201).json(newGame);
});

app.delete("/games/:id", (req, res) => {
    const id = Number(req.params.id);

    const gameIndex = games.findIndex(game => game.id === id);

    if (gameIndex === -1) {
        return res.status(404).json({
            message: "Game not found"
        });
    }

    const deletedGame = games.splice(gameIndex, 1);

    res.json({
        message: "Game deleted",
        game: deletedGame[0]
    });
});

app.get("/test-error", (req, res) => {
    throw new Error("Something exploded!");
});


app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        message: "Something went wrong"
    });
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});