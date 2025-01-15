const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const playerStatsRoutes = require('./routes/players_stats');

app.use('/api/playersstats', playerStatsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
