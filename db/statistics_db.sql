CREATE DATABASE IF NOT EXISTS statistics;

USE statistics;

CREATE TABLE IF NOT EXISTS player_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT NOT NULL,
    nickname VARCHAR(255),
    profile_image VARCHAR(255),
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    score INT CHECK (score BETWEEN 1 AND 100)
);

INSERT INTO player_stats (player_id, nickname, profile_image, score)
VALUES (12, "varkirion", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 100),
(13, "purpledog163", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 45),
(14, "happygoose784", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 50),
(15, "tinylion243", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 70),
(16, "tinyelephant218", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 20),
(17, "brownbird424", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 48),
(18, "sadpanda509", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 53),
(19, "crazypanda220", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 7),
(11, "ticklishostrich889", "https://pbs.twimg.com/profile_images/1481003172613472257/nTgW4oHu_400x400.jpg", 68)
