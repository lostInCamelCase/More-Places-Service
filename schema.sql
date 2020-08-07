DROP DATABASE IF EXISTS morePlaces;

CREATE DATABASE morePlaces;

USE morePlaces;


CREATE TABLE lists (
  id INT AUTO_INCREMENT,
  name VARCHAR(100),
  PRIMARY KEY(id)
);

CREATE TABLE properties (
  id INT AUTO_INCREMENT,
  name VARCHAR(300),
  superhost INT,
  type VARCHAR(100),
  beds INT,
  price INT,
  rating FLOAT,
  review_count INT,
  image VARCHAR(300),
  list INT,
  PRIMARY KEY(id),
  FOREIGN KEY (list) REFERENCES lists(id)
);