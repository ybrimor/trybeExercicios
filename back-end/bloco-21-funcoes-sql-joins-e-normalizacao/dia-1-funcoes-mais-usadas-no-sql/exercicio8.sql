# EXERCICIO 8: Faça as alterações necessárias no exercicio 7 para que seja exibido
# somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog)
SELECT
	job_id,
	FORMAT(SUM(salary),2) AS 'Pagamento por profissão'
FROM hr.employees
GROUP BY
	job_id
HAVING
	job_id = 'IT_PROG';