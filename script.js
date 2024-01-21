/**
  Exercicio 01
 */
let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois números é: ${numberOne % numberTwo}`)
 
alert(`A soma dos dois números é par ou impar: ${((numberOne + numberTwo) % 2) == 0 ? 'par' : 'impar'}`)
alert(`Os dois números são iguais: ${(numberOne === numberTwo) ? 'Sim': 'Não'}`)