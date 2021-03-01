-- 6
SELECT YEAR(CURRENT_DATE()) - 1993;
-- 11
SELECT first_name, hire_date FROM hr.employees WHERE hire_date BETWEEN '1987-06-01' and '1987-07-30';
-- 15
SELECT first_name, last_name FROM hr.employees WHERE MONTH(hire_date) = 6;
-- 21
SELECT department_id, YEAR(hire_date), COUNT(employee_id) AS 'mesmo departamento' FROM hr.employees
GROUP BY department_id, YEAR(hire_date);