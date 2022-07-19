# EXERCICIO 5:Escreva uma query que exiba quatro informações: o maior salário,
# o menor salário, a soma de todos os salários e a média dos salários.
# Todos os valores devem ser formatados para ter apenas duas casas decimais

SELECT
	FORMAT(MAX(salary), 2) AS 'Maior Salario',
    FORMAT(MIN(salary), 2) AS 'Menor Salario',
    FORMAT(SUM(salary), 2) AS 'Sumatoria Salario',
    FORMAT(AVG(salary), 2) AS 'Média Salarios'
FROM hr.employees;
