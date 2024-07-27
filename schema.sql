CREATE DATABASE users;
USER users;

CREATE TABLE users (
    id integer PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (name, password) 
VALUES
('kimi', 'putap3p3()'),
('junjun', 'passw0rd');