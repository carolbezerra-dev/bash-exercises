-- SELF JOIN
-- 1
SELECT f1.film_id, f2.replacement_cost
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.replacement_cost = f2.replacement_cost;
-- 2
SELECT f1.title, f2.rental_duration
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.rental_duration = f2.rental_duration AND f1.rental_duration BETWEEN 2 AND 4;