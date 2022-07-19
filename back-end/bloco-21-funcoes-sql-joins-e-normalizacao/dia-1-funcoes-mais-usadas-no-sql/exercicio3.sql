# EXERCICIO 3:  Escreva uma query que exiba a média salarial de cada job_id
# ordenando pela média salarial em ordem decrescente
SELECT
	job_id,
    FORMAT(AVG(salary),2) AS media_salarial
FROM hr.employees
GROUP BY job_id
ORDER BY AVG(salary) DESC;




