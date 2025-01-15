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
VALUES (12, "varkirion", "https://randomuser.me/api/portraits/thumb/men/79.jpg", 1),
(13, "purpledog163", "https://randomuser.me/api/portraits/thumb/women/1.jpg", 45),
(14, "happygoose784", "https://randomuser.me/api/portraits/thumb/women/90.jpg", 50)
