# EXERCICIO 1: Escreva uma query que exiba o maior salário da tabela.
SELECT
	salary
FROM hr.employees
ORDER BY
	salary DESC LIMIT 1;