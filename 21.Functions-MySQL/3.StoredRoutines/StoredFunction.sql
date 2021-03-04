USE sakila;
DELIMITER $$

CREATE FUNCTION total_Payment(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total INT;
    SELECT COUNT(*) FROM sakila.payment WHERE customer_id = id INTO total;
    RETURN total;
END $$

DELIMITER ;

-- como usar:
SELECT total_Payment(1);