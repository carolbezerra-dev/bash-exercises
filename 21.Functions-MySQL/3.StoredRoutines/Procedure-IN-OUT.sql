SELECT * FROM sakila.customer;
-- USE sakila;
-- DELIMITER $$

-- CREATE PROCEDURE checkIfIsActive(IN emailIn VARCHAR(100), OUT statusOut NUMERIC)
-- BEGIN
-- 	SELECT active INTO statusOut FROM sakila.customer WHERE emailIn = email;
-- END $$

-- DELIMITER ;

SELECT @result;
CALL checkIfIsActive('SANDRA.MARTIN@sakilacustomer.org', @result);
SELECT @result;

-- OUTRA FORMA DE FAZER
USE sakila;
DELIMITER $$

CREATE PROCEDURE checkIfClientIsActive(IN emailIn VARCHAR(100), OUT statusOut NUMERIC)
BEGIN
	SET statusOut = (SELECT active FROM sakila.customer WHERE emailIn = email);
END $$

DELIMITER ;

SELECT @checking;
CALL checkIfClientIsActive('MARY.SMITH@sakilacustomer.org', @checking);
SELECT @checking;