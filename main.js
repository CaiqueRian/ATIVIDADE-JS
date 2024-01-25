// 1. Faça um programa que entre com três números, faça a média aritmética e mostre o resultado.


/* let num1 = Number(prompt("DIGITE UM NUMERO"));
let num2 = Number(prompt("DIGITE UM SEGUNDO NUMERO"));
let num3 = Number(prompt("DIGITE UM TERCEIRO NUMERO"));
let result = (num1 + num2 + num3) / 3
console.log(result); */


// 2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu novo salário, sabendo que o mesmo teve um aumento de 10%.


/* let nome = prompt("Digite o numero do funcionario ")
let salario = Number(prompt("Digite o seu salario"))
let salarioAumento = salario * 1.10
let result = Olá ${nome}, parabens pelo seu aumento, seu salario antigo era ${salario} e teve um aumento de 10% e passou a ser ${salarioAumento}`
console.log(result) */




// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do cálculo atribuir o valor para uma variável C.


/* let num1 = Number(prompt("Digite um numero: "));
let num2 = Number(prompt("Digite um segundo numero: "));
let c

if (num1 == num2) {
    console.log(num1 + num2)
} else {
    console.log(num1 * num2)
} */




// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o parcelamento for em 5 vezes, o acréscimo será de 20%.


/* let produtoFixo = Number(prompt("Digite o valor do produto comprado"));
let quantidadeParcelas = Number(prompt(`INSIRA A QUANTIDADE DE VEZES QUE VOCE QUER PARCELAR O VALOR DE ${produtoFixo}`));
if(quantidadeParcelas === 3){
    console.log((produtoFixo * 1.10) / 3)
}else if(quantidadeParcelas === 5){
    console.log((produtoFixo * 1.20) / 5)
} */




// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual ou superior a 8.


/* let nomeAluno = prompt("insira seu nome")
let nomeMateria = (prompt("Digite sua primeira materia: "));
let nota1 = Number(prompt("Digite sua primeira nota: "));
let nota2 = Number(prompt("Digite sua segunda nota: "));
let nota3 = Number(prompt("Digite sua terceira nota: "));
let media = (nota1 + nota2 + nota3) / 3

if(media >= 8){
    console.log(`Parabens ${nomeAluno}, voce foi aprovado na disciplina de ${nomeMateria} com a media ${media}`)
}else{
    console.log(`Infelizmente voce não foi aprovado ${nomeAluno}, sua media em ${nomeMateria} foi de ${media}, mas não desanime, estude mais que voce vai conseguir.`)
} */




// 6. Escreva um algoritmo que receba dois números reais e um código de seleção do usuário. Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente digitados e mostrar o resultado; se o código de seleção for 2, os números deverão ser multiplicados; se o código de seleção for 3, o primeiro número deve ser dividido pelo segundo.


/* let opcoes = prompt("Digite uma das opções na calculadora, Opção 1 = SOMA, Opção 2 = multiplicação, Opção 3 = Divisão")
let num1 = Number(prompt("Digite o primeiro numero")) 
let num2 = Number(prompt("Digite o segundo numero"))

if(opcoes == 1){
    console.log(eval(`${num1} + ${num2}`))
}else if(opcoes == 2){
    console.log(eval(`${num1} * ${num2}`))
}else if(opcoes == 3){
    console.log(eval(`${num1} / ${num2}`))
} */