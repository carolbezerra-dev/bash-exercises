-- GROUP BY
-- 1
SELECT COUNT(DISTINCT job_id) FROM hr.employees;
-- 2
SELECT SUM(salary) FROM hr.employees;
-- 3
SELECT MIN(salary) FROM hr.employees;
-- 4
SELECT MAX(salary) FROM hr.employees WHERE job_id = 'it_prog';
-- 5
SELECT AVG(salary), COUNT(*) FROM hr.employees WHERE department_id = 90;
-- 6
SELECT MAX(salary), MIN(salary), SUM(salary), AVG(salary) FROM hr.employees;
-- 7
SELECT job_id, COUNT(*) FROM hr.employees GROUP BY job_id;
-- 8
SELECT MAX(salary) - MIN(salary) FROM hr.employees;
-- 9
SELECT manager_id, MIN(salary) FROM hr.employees GROUP BY manager_id ORDER BY MIN(salary) LIMIT 1;
-- 10
SELECT department_id, SUM(salary) FROM hr.employees GROUP BY department_id;
-- 11
SELECT job_id, AVG(salary) FROM hr.employees GROUP BY job_id HAVING job_id <> 'IT_PROG';
-- 14
SELECT department_id, COUNT(department_id), AVG(salary) FROM hr.employees
GROUP BY department_id HAVING COUNT(department_id) > 10;