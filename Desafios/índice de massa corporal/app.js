var nome = prompt('Digite seu nome')

var altura = prompt('Digite sua altura em cm')
var peso = prompt('Digite seu peso')

altura = parseFloat(altura)
peso = parseFloat(peso)

altura /= 100

var indice = peso / (altura * altura)
var classificacao

if(indice <= 16) {
    classificacao = 'Baixo peso - muito grave'
} else if(indice >= 16 && indice <= 16.99) {
    classificacao = 'Baixo peso - grave'
} else if(indice >= 17 && indice <= 18.49) {
    classificacao = 'Baixo peso'
} else if(indice >= 18.50 && indice <= 24.99) {
    classificacao = 'Peso normal'
} else if(indice >= 25 && indice <= 29.99) {
    classificacao = 'Sobrepeso'
} else if(indice >= 30 && indice <= 34.99) {
    classificacao = 'Obesidade grau I'
} else if(indice >= 35 && indice <= 39.99) {
    classificacao = 'Obesidade grau II'
} else {
    classificacao = 'Obesidade grau III'
}

document.write(nome + ' você possui um imc igual a: ' + indice.toFixed(2) + ', sendo classificado como: ' + classificacao)