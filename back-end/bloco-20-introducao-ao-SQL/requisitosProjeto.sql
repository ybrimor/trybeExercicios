SELECT * FROM northwind.products LIMIT 3,10;

SELECT
	product_name,
    id
FROM 
	northwind.products
    ORDER BY product_name;
    
# Requisito 7
SELECT
	id
FROM 
	northwind.products
    ORDER BY id DESC LIMIT 5;

# Requisito 8
SELECT
	5+6 AS 'A',
    'de' AS 'Trybe',
    2+8 AS 'eh';
    
# Requisito 9
SELECT
	notes
FROM northwind.purchase_orders
WHERE notes IS NOT NULL;

# Requisito 10
 #Mostre todos os dados da tabela purchase_orders em ordem decrescente, ordenados por
 #created_by em que o created_by é maior ou igual a 3.
# Observações técnicas: Como critério de desempate para a ordenação, ordene também 
# os resultados pelo id de forma crescente.
SELECT 
	*
FROM 
	northwind.purchase_orders
WHERE 
	created_by >= 3
ORDER BY
	created_by DESC, id;  
    
#Requisito 11: Exiba os dados da coluna notes da tabela purchase_orders em que seu valor de
#Purchase generated based on Order é maior ou igual a 30 e menor ou igual a 39.
SELECT 
	notes
FROM 
	northwind.purchase_orders
WHERE 
	notes LIKE '%30' OR
    notes LIKE '%31' OR 
    notes LIKE '%32' OR
    notes LIKE '%33' OR
    notes LIKE '%34' OR
    notes LIKE '%35' OR 
    notes LIKE '%36' OR
    notes LIKE '%37' OR
    notes LIKE '%38' OR 
    notes LIKE '%39' ; 
    
# Requisito12 :Mostre as submitted_date de purchase_orders em que a
# submitted_date é do dia 26 de abril de 2006.
SELECT 
	submitted_date
FROM 
	northwind.purchase_orders
WHERE 
	submitted_date LIKE '2006-04-26%';
    
# Requisito 13: Mostre o supplier_id das purchase_orders em que o supplier_id seja 1 ou 3.
SELECT
	supplier_id
FROM 
	northwind.purchase_orders
WHERE 
	supplier_id = 1 OR supplier_id = 3;

# Requisito 14: Mostre os resultados da coluna supplier_id da tabela purchase_orders
# em que o supplier_id seja maior ou igual a 1 e menor ou igual 3.
SELECT
	supplier_id
FROM 
	northwind.purchase_orders
WHERE 
	supplier_id >= 1 AND supplier_id <= 3;
    
# Requisito 15: Mostre somente as horas (sem os minutos e os segundos) 
#da coluna submitted_date de todos registros da tabela purchase_orders.
# Observações técnicas: Chame essa coluna de submitted_hour
SELECT
	IF (SUBSTRING(submitted_date,12,1) = '0',  SUBSTRING(submitted_date,13,1), SUBSTRING(submitted_date,12,2)) AS 'submitted_hour' 
FROM 
	northwind.purchase_orders;
SELECT
	CASE
		WHEN SUBSTRING(submitted_date,12,1) = '0' THEN SUBSTRING(submitted_date,13,1)
        ELSE SUBSTRING(submitted_date,12,2)
	END AS  'submitted_hour'
FROM northwind.purchase_orders;
    
# Requisito 16: Exiba a submitted_date das purchase_orders que estão entre
# 2006-01-26 00:00:00 e 2006-03-31 23:59:59.
SELECT
	submitted_date
FROM 
	northwind.purchase_orders
WHERE
	submitted_date BETWEEN '2006-01-26 00:00:00' AND '2006-03-31 23:59:59';
    
# Requisito 17: Mostre os registros das colunas id e supplier_id das purchase_orders 
# em que os supplier_id sejam tanto 1, ou 3, ou 5, ou 7.
SELECT
	id,
    supplier_id
FROM 
	northwind.purchase_orders
WHERE
	supplier_id IN (1,3,5,7);
    
# Requisito 18: Mostre todos os registros de purchase_orders que
# tem o supplier_id igual a 3 e status_id igual a 2.
SELECT
	*
FROM 
	northwind.purchase_orders
WHERE
	supplier_id = 3 AND status_id = 2;

# Requisito 19: Mostre a quantidade de pedidos que foram feitos na tabela orders pelo 
# employee_id igual a 5 ou 6, e que foram enviados através do método(coluna) shipper_id igual a 2.
# Observações técnicas: Chame a coluna de orders_count.
SELECT
	COUNT(id) AS 'orders_count'
FROM
	northwind.orders
WHERE
	employee_id IN (5, 6) AND shipper_id = 2;
    
# Requisito 20/21:Adicione à tabela order_details um registro com 
# order_id: 69, product_id: 80, quantity: 15.0000, unit_price: 15.0000,
# discount: 0, status_id: 2, date_allocated: NULL, purchase_order_id: NULL e inventory_id: 129.
# Observações técnicas:o id deve ser incrementado automaticamente.


INSERT INTO northwind.order_details(order_id, product_id, quantity, unit_price, discount, status_id, inventory_id ) 
VALUES
	(69,80,15.0000,15.0000,0,2,129),
    (69,80,15.0000,15.0000,0,2,129);
    
# Requisito22: Atualize os dados de discount do order_details para 15.
# (Não é necessário utilizar o SAFE UPDATE em sua query).
UPDATE northwind.order_details
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao;


# Requisito 25:Delete todos os dados em que a unit_price da tabela order_details seja menor que 10.0000.
DELETE FROM northwind.order_details 
WHERE unit_price < 10.0000;
# Requisito 23:Atualize os dados da coluna discount da tabela order_details para 30,
# onde o valor na coluna unit_price seja menor que 10.0000.
UPDATE northwind.order_details
SET discount = 30
WHERE unit_price < 10.0000;
# Requisito 25:Atualize os dados da coluna discount da tabela order_details para 45, 
# onde o valor na coluna unit_price seja maior que 10.0000 e o id seja um número entre 30 e 40.
UPDATE northwind.order_details
SET discount = 45
WHERE unit_price > 10.0000 AND id > 30 AND id < 40;

# Requisito 26:  Delete todos os dados em que a unit_price da tabela order_details seja maior que 10.0000.
DELETE FROM northwind.order_details 
WHERE unit_price > 10.0000;

# Requisito 27:  Delete todos os dados da tabela order_details
# DELETE FROM northwind.order_details;