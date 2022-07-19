# EXERCICIO 10: Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos
# com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT
	department_id,
	FORMAT(AVG(salary), 2) AS 'Média Salarial',
    COUNT(department_id) AS 'Número de Funcionarios'
FROM
	hr.employees
GROUP BY
	department_id
HAVING
	COUNT(department_id) > 10;