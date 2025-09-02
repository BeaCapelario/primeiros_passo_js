//Pedir uma idade e dizer se a pessoa pode tirar carteira de motorista.
alert("Você está na idade certa para tirar carteira de motorista?")

function maiorIdade (anoAtual, anoNasc) {
    return anoAtual - anoNasc
}

let anoAtual = Number(prompt("Insira o ano atual"))
let anoNasc = Number(prompt("Insira seu ano de nascimento"))

if (anoAtual - anoNasc >= 18){
    alert("Você está apto!")
} else {
    alert("Aguarde mais um pouco...")
}