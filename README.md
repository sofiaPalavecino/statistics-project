# Game Statistics 

## Project description

This project consists of

- A React site to see the top 10 players and download the report
- An Express API to retrieve the players information and post new statistics
- A Node.js script to insert players statistics (from 0 to 10 players). This script is run every 5 minutes by a cron job
- A MySQL database to store the statistics

## Project requirements

To launch this project, it is needed to use Docker and `docker-compose`

## Project Setup

1. Clone this repository

2. Run the following command
`docker-compose up -d`
3. Once the project is up, go to http://localhost:8081

## Endpoints

The API runs in https://localhost:3000

- GET /top: get the 10 players with the highest score
- POST /generate-stats: create one new random player
