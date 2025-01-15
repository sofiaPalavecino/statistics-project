const axios = require('axios');

async function sendStats() {
    try {

        // Insert statistics of the player’s games between 0 and 10 players
        const randomNumber = Math.floor(Math.random() * 11);

        console.log(`Generating stats for ${randomNumber} players`);

        for (let i = 0; i < randomNumber; i++) {
            const response = await axios.post('http://express_api:3000/generate-stats');
            console.log('Stats generated successfully:', response.data);
        }

    } catch (error) {
        console.error('Error generating stats:', error);
    }
}

sendStats();

module.exports = sendStats;
