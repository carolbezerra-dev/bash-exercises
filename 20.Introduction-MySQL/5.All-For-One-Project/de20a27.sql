-- 20
INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id)
	VALUES (69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129);
-- 21
INSERT INTO northwind.order_details (order_id, product_id, quantity, unit_price, discount, status_id, date_allocated, purchase_order_id, inventory_id)
	VALUES (69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129), (69, 80, 15.0000, 15.0000, 0, 2, NULL, NULL, 129);
-- 22
UPDATE northwind.order_details SET discount = 15;
-- 23
UPDATE northwind.order_details SET discount = 30 WHERE unit_price < 10.0000;
-- 24
UPDATE northwind.order_details SET discount = 45 WHERE unit_price > 10.0000 AND id BETWEEN 29 AND 40;
SELECT * FROM northwind.order_details WHERE unit_price > 10.0000 AND id BETWEEN 30 AND 40;
-- 25
DELETE FROM northwind.order_details WHERE unit_price < 10.0000;
-- 26
DELETE FROM northwind.order_details WHERE unit_price > 10.0000;
-- 27
TRUNCATE northwind.order_details;