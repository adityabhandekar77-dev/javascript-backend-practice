import express from "express";

const app = express();
app.use(express.json());

const games = [
    { id: 1, title: "Hades", rating: 9.3 },
    { id: 2, title: "Max Payne", rating: 9.0 },
    { id: 3, title: "Dishonored", rating: 8.8 }
];

app.get("/", (req, res) => {
    res.send("My first Express server is running!");
});

app.get("/games", (req, res) => {
    res.json(games);
});

app.get("/games/:id", (req, res) => {
    const id = Number(req.params.id);

    const game = games.find(game => game.id === id);

    res.json(game);
});

app.post("/games", (req, res) => {

    console.log(req.body);

    res.send("Game received");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});