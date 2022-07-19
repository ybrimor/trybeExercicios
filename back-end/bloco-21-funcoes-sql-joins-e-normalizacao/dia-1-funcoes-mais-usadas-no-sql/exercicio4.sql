# Exercicio 4:Escreva uma query que exiba a quantidade de dinheiro necessária
# para realizar o pagamento de todas as pessoas funcionárias
SELECT 
	FORMAT(SUM(salary)/100,2)# Considerando que a base esta expresada en cantavo
FROM
	hr.employees;