-- MANIPULAÇÃO DE STRINGS
-- 1
SELECT UCASE('trybe');
-- 2
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
-- 3
SELECT LENGTH('Uma frase qualquer');
-- 4
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
-- 5
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
-- CONDICIONAIS
-- 1
SELECT film_id, title,
IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;
-- nome da coluna ficou entre aspas porque tem mais de 1 palavra
-- 2
SELECT title, rating, CASE
WHEN rating = 'G' THEN 'Livre para todos'
WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
ELSE 'Proibido para menores de idade' END AS 'público-alvo' FROM sakila.film;
-- FUNÇÕES MATEMÁTICAS
-- DIV E MOD
-- 1
SELECT IF(15 MOD 2, 'Ímpar', 'Par') AS 'Par ou Ímpar';
-- 2
SELECT 220 DIV 12;
-- 3
SELECT 220 MOD 12;
-- é a mesma coisa de fazer 220 - (18 * 12);
-- OUTROS
-- 1
SELECT FLOOR(15 + (RAND() * 5));
-- 2
SELECT ROUND(15.75, 5);
-- 3
SELECT FLOOR(39.494);
-- 4
SELECT CEIL(85.234);
-- TRABALHANDO COM DATAS
-- 1
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());
-- 2
SELECT TIMEDIFF('10:25:45', '11:00:00');
-- FUNÇÕES DE AGREGAÇÃO
-- 1
SELECT * FROM sakila.film;
SELECT AVG(length) AS 'Média de Duração',
	MIN(length) AS 'Duração Mínima', MAX(length) AS 'Duração Máxima',
	SUM(length) AS 'Tempo de Exibição Total', COUNT(length) AS 'Filmes Registrados'
FROM sakila.film;
-- GROUP BY
-- 1
SELECT * FROM sakila.customer;
SELECT active, COUNT(*) FROM sakila.customer GROUP BY active;
-- 2
SELECT store_id, active, COUNT(*) FROM sakila.customer GROUP BY store_id, active;
-- 3
SELECT AVG(length), rating FROM sakila.film GROUP BY rating ORDER BY AVG(length) DESC;
-- 4
SELECT * FROM sakila.address;
SELECT district, COUNT(district) FROM sakila.address GROUP BY district ORDER BY COUNT(district) DESC;
-- HAVING
-- 1
SELECT rating, AVG(length) AS média FROM sakila.film
GROUP BY rating HAVING média > 115.0 AND média <= 121.50 ORDER BY média DESC;
-- 2
SELECT rating, SUM(replacement_cost) AS soma FROM sakila.film
GROUP BY rating HAVING soma > 3950.50 ORDER BY soma;
