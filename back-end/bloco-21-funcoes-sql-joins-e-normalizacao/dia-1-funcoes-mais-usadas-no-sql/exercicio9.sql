# EXERCICIO 9: Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos,
# exceto das pessoas programadoras (it_prog)

SELECT
	job_id,
	FORMAT(AVG(salary),2) AS 'Pagamento por profissão'
FROM hr.employees
GROUP BY
	job_id
HAVING
	job_id <> 'IT_PROG';