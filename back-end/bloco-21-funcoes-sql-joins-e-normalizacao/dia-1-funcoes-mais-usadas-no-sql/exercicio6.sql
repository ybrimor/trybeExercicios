# EXERCICIO 6: Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog)

SELECT
	job_id,
    COUNT(job_id) AS 'numero'
FROM
	hr.employees
GROUP BY
	job_id
HAVING
	job_id = 'IT_PROG';