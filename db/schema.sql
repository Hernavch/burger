var mysql = require("mysql");

CREATE DATABASE burgers_db;

use burgers_db;


CREATE TABLE burgers (
 id INT NOT NULL AUTO_INCREMENT,
 burger_name VARCHAR (20),
 devoured BOOLEAN DEFAULT false,
 PRIMARY KEY (id)
 );
