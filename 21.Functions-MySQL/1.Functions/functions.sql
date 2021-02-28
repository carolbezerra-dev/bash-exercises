-- 2
SELECT REPLACE(phone_number, 124, 999) FROM hr.employees;
-- 3
SELECT * FROM hr.employees WHERE LENGTH(first_name) >= 8;
-- 6
SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;
-- 7
SELECT employee_id, LEFT(email, LENGTH(email) - 3) FROM hr.employees;
-- 9
SELECT RIGHT(phone_number, 4) FROM hr.employees;