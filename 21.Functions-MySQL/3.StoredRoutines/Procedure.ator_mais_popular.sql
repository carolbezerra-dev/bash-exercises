USE sakila;
DELIMITER $$

CREATE PROCEDURE atorMaisPopular()
BEGIN
	SELECT actor_id, COUNT(film_id) FROM sakila.film_actor GROUP BY actor_id;
END $$

DELIMITER ;