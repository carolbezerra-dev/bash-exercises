SELECT * FROM actor WHERE first_name = 'KARL';
SELECT * FROM film_actor WHERE actor_id = 12;
DELETE FROM film_actor WHERE actor_id = 12;
DELETE FROM actor WHERE first_name = 'KARL';

SELECT * FROM actor WHERE first_name = 'MATTHEW';
DELETE FROM actor WHERE first_name = 'MATTHEW';
DELETE FROM film_actor WHERE actor_id IN (8, 103, 181);

SELECT * FROM film_text;
DELETE FROM film_text WHERE description LIKE '%saga%';

SELECT * FROM film_actor;
DELETE FROM film_actor;
SELECT * FROM film_category;
TRUNCATE film_category;

DROP SCHEMA sakila;