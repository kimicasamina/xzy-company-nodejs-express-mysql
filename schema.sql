DROP DATABASE IF EXISTS dummy_db;   
CREATE DATABASE IF NOT EXISTS dummy_db;  
USE dummy_db;

DROP TABLE IF EXISTS dummy_users;

CREATE TABLE IF NOT EXISTS dummy_users  (
    id  bigint(20) NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY name-idx (name)
);

INSERT INTO dummy_users (id, name, password) 
VALUES
(1, 'name', 'cb825a05d743c50112becede14b2c132'),
(2, 'foo', '3858f62230ac3c915f300c664312c63f');




-- CREATE TABLE IF NOT EXISTS `users` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `name` varchar(100) NOT NULL,
--   `password` varchar(100) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `name-idx` (`name`)
-- ) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- INSERT INTO `users` (`id`, `name`, `password`) VALUES
-- (1, 'name', 'cb825a05d743c50112becede14b2c132'),
-- (2, 'foo', '3858f62230ac3c915f300c664312c63f');