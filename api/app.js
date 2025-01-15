const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();

app.use(cors());

const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'statistics',
});

app.use(express.json());

app.post('/generate-stats', async (req, res) => {

    let user

    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        user = data.results[0];
    } catch (err) {
        console.error('Error fetching user data:', err);
        return res.status(500).json({ error: 'Failed to fetch random user data' });
    }

    const playerId = user.login.uuid;
    const nickname = user.login.username;
    const profileImage = user.picture.medium;
    const score = Math.floor(Math.random() * 100) + 1;

    try {
        await pool.query(
            'INSERT INTO player_stats (player_id, nickname, profile_image, score) VALUES (?, ?, ?, ?)',
            [playerId, nickname, profileImage, score]
        );
        res.status(201).json(
            { 
                message: 'Player stats added',
                player: {
                    player_id: playerId,
                    nickname: nickname,
                    profile_image: profileImage,
                    score: score,
                } 
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/top', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT nickname, profile_image, score, creation_date FROM player_stats ORDER BY score DESC LIMIT 10'
        );
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}!`);
});
