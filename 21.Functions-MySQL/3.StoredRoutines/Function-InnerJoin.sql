USE sakila;
DELIMITER $$

CREATE FUNCTION howMuchCategory(categoryName VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE totalResult INT;
	SELECT COUNT(fc.film_id) FROM sakila.film_category AS fc
	INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
	WHERE c.name = categoryName INTO totalResult;
RETURN totalResult;
END $$

DELIMITER ;