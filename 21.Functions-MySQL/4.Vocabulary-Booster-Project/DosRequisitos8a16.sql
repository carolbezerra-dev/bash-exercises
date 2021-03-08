-- 8
SELECT * FROM w3schools.customers; -- CustomerID, ContactName
SELECT * FROM w3schools.orders; -- CustomerID, OrderDate, ShipperID
SELECT * FROM w3schools.shippers; -- ShipperName, ShipperID (1 ou 2)
SELECT c.ContactName AS 'Nome de contato',
IF(o.ShipperID IN (1, 2), s.ShipperName, NULL) AS 'Empresa que fez o envio',
o.OrderDate AS 'Data do pedido'
FROM w3schools.customers AS c
INNER JOIN w3schools.orders AS o ON c.CustomerID = o.CustomerID
INNER JOIN w3schools.shippers AS s ON o.ShipperID = s.ShipperID
WHERE IF(o.ShipperID IN (1, 2), s.ShipperName, NULL) IS NOT NULL
ORDER BY c.ContactName, s.ShipperName, o.OrderDate;
-- 9
SELECT CONCAT(e.FirstName, ' ', e.LastName) AS 'Nome completo',
COUNT(o.OrderID) AS 'Total de pedidos'
FROM w3schools.employees AS e
INNER JOIN w3schools.orders AS o
ON e.EmployeeID = o.EmployeeID
GROUP BY `Nome completo`
ORDER BY `Total de pedidos`;
-- 10
SELECT * FROM w3schools.order_details; -- OrderID, ProductID, Quantity
SELECT * FROM w3schools.products; -- ProductID, ProductName
SELECT p.ProductName AS Produto,
MIN(o.Quantity) AS Mínima,
MAX(o.Quantity) AS Máxima,
ROUND(AVG(o.Quantity), 2) AS Média
FROM w3schools.products AS p
INNER JOIN w3schools.order_details AS o 
ON p.ProductID = o.ProductID
GROUP BY Produto
HAVING Média > 20
ORDER BY Média, Produto;
-- 11
-- SELECT * FROM w3schools.customers ORDER BY ContactName;
-- SELECT c1.ContactName AS Nome, c2.Country AS País,
-- COUNT(c2.Country) - 1 AS 'Número de compatriotas'
-- FROM w3schools.customers AS c1, w3schools.customers AS c2
-- WHERE c1.Country = c2.Country
-- GROUP BY País
-- ORDER BY Nome;
-- 13
SELECT p.ProductName AS Produto, p.Price AS Preço
FROM w3schools.products AS p
INNER JOIN w3schools.order_details AS od ON p.ProductID = od.ProductID
WHERE od.Quantity > 80
ORDER BY Produto;
-- 14
SELECT Country AS País FROM w3schools.customers
UNION
SELECT Country FROM w3schools.suppliers
ORDER BY País
LIMIT 5;
-- 15
USE hr;
DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN jobTitle VARCHAR(100))
BEGIN
	SELECT ROUND(AVG(e.salary), 2) AS 'Média salarial' FROM hr.employees AS e
	INNER JOIN hr.jobs AS j ON e.job_id = j.job_id
	WHERE j.job_title = jobTitle;
END $$

DELIMITER ;
-- 16
USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(emailIn VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE total INT;
SELECT COUNT(*) FROM hr.employees AS e
INNER JOIN hr.job_history AS jh ON e.employee_id = jh.employee_id
WHERE e.email = emailIn INTO total;
RETURN total;
END $$

DELIMITER ;