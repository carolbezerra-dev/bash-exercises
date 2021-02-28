-- 9
SELECT notes FROM northwind.purchase_orders WHERE notes IS NOT NULL;
-- 10
SELECT * FROM northwind.purchase_orders
WHERE created_by >= 3
ORDER BY created_by DESC, id;
-- 11
SELECT * FROM northwind.purchase_orders;
-- 12
SELECT submitted_date FROM northwind.purchase_orders
WHERE submitted_date LIKE '2006-04-26%';
-- 13
SELECT supplier_id FROM northwind.purchase_orders
WHERE supplier_id IN (1, 3);
-- 14
SELECT supplier_id FROM northwind.purchase_orders
WHERE supplier_id BETWEEN 0 AND 3;
-- 15
SELECT Hour(submitted_date) AS submitted_hour FROM northwind.purchase_orders;
-- 16
SELECT submitted_date FROM northwind.purchase_orders
WHERE submitted_date BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';
-- 17
SELECT id, supplier_id FROM northwind.purchase_orders
WHERE supplier_id IN (1, 3, 5, 7);
-- 18
SELECT * FROM northwind.purchase_orders
WHERE supplier_id = 3 AND status_id = 2;
-- 19
SELECT COUNT(*) FROM orders
AS orders_count
WHERE employee_id IN (5, 6) AND shipper_id = 2;