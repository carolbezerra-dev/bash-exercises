SELECT * FROM staff;
INSERT INTO staff (first_name, last_name, address_id, store_id, username) VALUES
('Carol', 'Bezerra', 1, 2, 'Rol'),
('Ana', 'Andrade', 1, 1, 'Ana');

SELECT first_name, last_name FROM customer LIMIT 5;
SELECT * FROM actor ORDER BY actor_id DESC;
INSERT INTO actor (first_name, last_name) VALUES
('MARY', 'SMITH'),
('PATRICIA', 'JOHNSON'),
('LINDA', 'WILLIAMS'),
('BARBARA', 'JONES'),
('ELIZABETH', 'BROWN');

SELECT * FROM category;
INSERT INTO category (`name`) VALUES ('netflix'), ('watch_now'), ('wait_more');

SELECT * FROM store;
INSERT INTO store (manager_staff_id, address_id) VALUES (3, 1);


