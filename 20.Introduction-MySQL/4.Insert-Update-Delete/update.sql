SET SQL_SAFE_UPDATES = 0;
SELECT * FROM actor;
UPDATE actor SET first_name = 'JULES' WHERE first_name = 'JULIA';
SELECT * FROM actor WHERE first_name = 'JULES';

SELECT * FROM category WHERE name = 'Sci-Fi';
UPDATE category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';
SELECT * FROM category WHERE name = 'Science Fiction';

SELECT * FROM film;
UPDATE film SET rental_rate = 25 WHERE length > 100 AND replacement_cost > 20 AND rating IN ('G', 'PG', 'PG-13');

SET SQL_SAFE_UPDATES = 0;
SELECT rental_rate, `length` FROM film;
UPDATE film SET rental_rate = (
CASE 
	WHEN `length` > 0 AND `length` <= 100 THEN 10
	WHEN `length` > 100 THEN 20
END);


