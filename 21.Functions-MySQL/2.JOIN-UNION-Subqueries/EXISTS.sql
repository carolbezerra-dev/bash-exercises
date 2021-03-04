-- EXISTS
-- 1
SELECT Id, title FROM hotel.Books AS b
WHERE NOT EXISTS (SELECT * FROM hotel.Books_Lent WHERE b.Id = book_id);
-- 2
SELECT Id, title FROM hotel.Books AS b
WHERE EXISTS (SELECT * FROM hotel.Books_Lent WHERE b.Id = book_id AND b.title LIKE '%lost%');
-- 3
SELECT name FROM hotel.Customers AS c
WHERE NOT EXISTS (SELECT * FROM hotel.CarSales WHERE c.CustomerId = CustomerID);