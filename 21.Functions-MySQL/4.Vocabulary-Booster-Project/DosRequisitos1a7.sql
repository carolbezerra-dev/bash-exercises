-- 1
SELECT country_name AS País, IF(region_id = 1, 'incluído', 'não incluído') AS 'Status Inclusão' 
FROM hr.countries ORDER BY País;
-- 2
SELECT job_title AS Cargo, CASE
WHEN max_salary BETWEEN 5000 AND 10000 THEN 'Baixo'
WHEN max_salary BETWEEN 10001 AND 20000 THEN 'Médio'
WHEN max_salary BETWEEN 20001 AND 30000 THEN 'Alto'
WHEN max_salary > 30000 THEN 'Altíssimo'
END AS Nível FROM hr.jobs ORDER BY job_title;
-- 3
SELECT job_title AS Cargo, max_salary - min_salary AS 'Diferença entre salários máximo e mínimo'
FROM hr.jobs ORDER BY `Diferença entre salários máximo e mínimo`, Cargo;
-- 4
SELECT j.job_title AS Cargo, ROUND(AVG(e.salary), 2) AS 'Média salarial', CASE
WHEN AVG(e.salary) BETWEEN 2000 AND 5800 THEN 'Júnior'
WHEN AVG(e.salary) BETWEEN 5801 AND 7500 THEN 'Pleno'
WHEN AVG(e.salary) BETWEEN 7501 AND 10500 THEN 'Sênior'
WHEN AVG(e.salary) > 10500 THEN 'CEO'
END AS Senioridade
FROM hr.employees AS e
INNER JOIN hr.jobs AS j ON e.job_id = j.job_id
GROUP BY j.job_title
ORDER BY `Média salarial`, Cargo;
-- 5
SELECT job_title AS Cargo, max_salary - min_salary AS 'Variação Salarial',
ROUND(min_salary / 12, 2) AS 'Média mínima mensal',
ROUND(max_salary / 12, 2) AS 'Média máxima mensal'
FROM hr.jobs
ORDER BY `Variação Salarial`, Cargo;
-- 6
SELECT * FROM hr.job_history; -- employee_ID, start_date, job_ID, department_ID
SELECT * FROM hr.employees; -- employee_ID, first_name, last_name, job_ID, department_ID
SELECT * FROM hr.jobs; -- job_ID, job_title
SELECT * FROM hr.departments; -- department_ID, department_name
SELECT CONCAT(e.first_name, ' ', e.last_name) AS 'Nome completo',
j.job_title AS Cargo,
jh.start_date AS 'Data de início do cargo',
d.department_name AS Departamento
FROM hr.employees AS e
RIGHT JOIN hr.job_history AS jh ON e.employee_ID = jh.employee_ID
LEFT JOIN hr.jobs AS j ON jh.job_ID = j.job_ID
LEFT JOIN hr.departments AS d ON d.department_ID = jh.department_ID
WHERE j.job_title IS NOT NULL
ORDER BY `Nome completo` DESC, Cargo;
-- começa filtrando pela tabela job_history, pois possui menos linhas, lembra de tirar o NULL
-- employees RIGHT job_history, significa que a tabela que vai ser obrigatoriamente intacta é a job_history que está à direita
-- o 1º LEFT vai estar considerando o resultado da esquerda, ou seja, há um efeito cascata
-- 7
SELECT * FROM hr.job_history; -- start_date, employee_id, job_id
SELECT * FROM hr.employees; -- first_name, last_name, salary, employee_id, job_id
SELECT UCASE(CONCAT(e.first_name, ' ', e.last_name)) AS 'Nome completo',
IF(MONTH(jh.start_date) IN (1, 2, 3), jh.start_date, NULL) AS 'Data de início',
e.salary AS Salário
FROM hr.employees AS e
RIGHT JOIN hr.job_history AS jh ON e.employee_id = jh.employee_id
WHERE IF(MONTH(jh.start_date) IN (1, 2, 3), jh.start_date, NULL) IS NOT NULL
ORDER BY `Nome completo`, `Data de início`;
