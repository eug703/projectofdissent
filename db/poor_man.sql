-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS poorMan_db;
-- Creates the "favorite_db" database --
CREATE DATABASE poorman_db;

-- Makes it so all of the following code will affect favorite_db --
USE poorman_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE jobs (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    technologies VARCHAR(200) NOT NULL,
    budget VARCHAR(20) NOT NULL,
    description TEXT Not NULL,
    PRIMARY KEY (id)
);