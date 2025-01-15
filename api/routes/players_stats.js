const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

// Database connection pool
const pool = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'statistics',
});

router.get('/top', async (req, res) => {
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

module.exports = router;
