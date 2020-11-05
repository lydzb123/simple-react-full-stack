CREATE DATABASE my_orders;

USE my_orders;

CREATE TABLE orders (
  orderID int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),

  PRIMARY KEY (orderID),
);



     <input type="text" id="name"/></label>
        <input type="text" id="email"/></label>
        <input type="text" id="password"/></label>

        //creates a new user

        //shipping info
        <input type="text" id="line1"/></label>
        <input type="text" id="line2"/></label>
        <input type="text" id="city"/></label>
        <input type="text" id="state"/></label>
        <input type="number" id="zipcode"/></label>
        <input type="text" id="phonenumber"/></label>

        //billing info

        <label>Credit Card Number:
        <input type="text" id="creditcardnumber"/></label>

        <label>Expiration Date:
        <input type="text" id="exp"/></label>

        <label>CVV:
        <input type="text" id="css"/></label>

        <label>Billing Zipcode:
        <input type="number" id="billingzip"/></label>




/* Create other tables and define schemas for them here! */

/* ID int NOT NULL PRIMARY KEY


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

