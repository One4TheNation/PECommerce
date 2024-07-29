-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE category (
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name CHAR LENGTH NOT NULL
    
);

CREATE TABLE product(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name
    price DECIMAL NOT NULL 
    stock INTEGER NOT NULL (10) ISNUMERIC,
    category_id INTEGER REFERENCES category(id)
);

CREATE TABLE tag(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tag_name INTEGER,
);


CREATE TABLE product_tag(
id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_tag INTEGER product(id),
    tag_id INTEGER product(id),
);


\c ecommerce_db;

