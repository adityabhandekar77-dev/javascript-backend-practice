import "dotenv/config";
import pool from "./database/db.js";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Game Library API is running!");
});

app.get("/games", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM games ORDER BY id;"
        );

        res.json(result.rows);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });
    }
});

app.get("/games/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const result = await pool.query(
            "SELECT * FROM games WHERE id = $1;",
            [id]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });
    }
});


    app.post("/games", async (req, res) => {
    try {
        const { title, rating } = req.body;

        const result = await pool.query(
            `INSERT INTO games(title, rating)
             VALUES($1, $2)
             RETURNING *;`,
            [title, rating]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });
    }
});

app.patch("/games/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, rating } = req.body;

        const result = await pool.query(
            `UPDATE games
             SET title = $1,
                 rating = $2
             WHERE id = $3
             RETURNING *;`,
            [title, rating, id]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });
    }
});

app.delete("/games/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const result = await pool.query(
            `DELETE FROM games
             WHERE id = $1
             RETURNING *;`,
            [id]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Database Error"
        });
    }
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});