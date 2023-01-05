var num1 = 9
var num2 = 2

num1 = parseInt(num1)
num2 = parseInt(num2)

document.write('A soma entre os numeros é: ' + (num1 + num2) + '<br>')
document.write('A subtração entre os numeros é: ' + (num1 - num2) + '<br>')
document.write('A multiplicação entre os numeros é: ' + (num1 * num2) + '<br>')
document.write('A divisão entre os numeros é: ' + (num1 / num2) + '<br>')
document.write('o módulo entre os numeros é: ' + (num1 % num2) + '<br>')

document.write('<br>')

// Incremento e Decremento Pós e Pré

// ++ após a variavel, o valor atualiza somente em outra chamada da variavel
document.write('O incremento de ' + num1 + ' é: ' + (num1++) + '<br>')
document.write(num1)

document.write('<br>')

// -- antes da variavel, o valor atualiza na mesma linha de codigo
document.write('O decremento de ' + num1 + ' é: ' + (--num1) + '<br>')
document.write(num1)