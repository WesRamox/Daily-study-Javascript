// 1) Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo usuário.

var idade = window.prompt("Digite sua idade")

if(idade >= 0 && idade < 15) {
    document.write("Criança")
} else if(idade >= 15 && idade < 30) {
    document.write("Jovem")
} else if(idade >= 30 && idade < 60) {
    document.write("Adulto")
} else if(idade >= 60) {
    document.write("Idoso")
}