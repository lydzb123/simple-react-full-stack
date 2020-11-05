CREATE DATABASE my_orders;

USE my_orders;

CREATE TABLE order_info (
  orderID int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(25),
  password VARCHAR(25),
  PRIMARY KEY (orderID)
);

CREATE TABLE shipping_info (
orderID int,
address VARCHAR(50),
address2 VARCHAR(50),
phonenumber VARCHAR(12),
FOREIGN KEY (orderID)
  REFERENCES order_info(orderID)
);

CREATE TABLE billing_info (
orderID int,
creditcardnumber int,
exp VARCHAR(20),
billingzip int,
FOREIGN KEY (orderID)
  REFERENCES order_info(orderID)
);





/* Create other tables and define schemas for them here! */

/* ID int NOT NULL PRIMARY KEY


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

