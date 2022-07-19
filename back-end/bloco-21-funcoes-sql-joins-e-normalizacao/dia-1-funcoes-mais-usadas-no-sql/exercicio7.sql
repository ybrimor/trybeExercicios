# EXERCICIO 7 :Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar
# o pagamento de cada profissão (job_id)
SELECT
	job_id,
	FORMAT(SUM(salary),2) AS 'Pagamento por profissão'
FROM hr.employees
GROUP BY
	job_id;