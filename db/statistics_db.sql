CREATE DATABASE IF NOT EXISTS statistics;

USE statistics;

CREATE TABLE IF NOT EXISTS player_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id VARCHAR(255) NOT NULL,
    nickname VARCHAR(255),
    profile_image VARCHAR(255),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    score INT CHECK (score BETWEEN 1 AND 100)
);

INSERT INTO player_stats (player_id, nickname, profile_image, score)
VALUES ("3f78c32b-488c-4d9d-8820-d8f61cd80840", "varkirion", "https://randomuser.me/api/portraits/thumb/men/79.jpg", 1)
