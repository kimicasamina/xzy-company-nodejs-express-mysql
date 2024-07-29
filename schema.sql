DROP DATABASE IF EXISTS dummy_db;   
CREATE DATABASE IF NOT EXISTS dummy_db;  
USE dummy_users;

DROP TABLE IF EXISTS dummy_users;

CREATE TABLE IF NOT EXISTS dummy_users  (
    id integer PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO dummy_users (name, password) 
VALUES
('kimi', 'putap3p3()'),
('junjun', 'passw0rd');