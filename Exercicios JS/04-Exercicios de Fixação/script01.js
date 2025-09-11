nota1 = Number(prompt("Insira a 1ª nota:"))
nota2 = Number(prompt("Insira a 2ª nota:"))

let media = ((nota1 + nota2) / 2)

if (media > 6){
    alert(`A média é: ${media}. Está acima da média`)
} else {
    alert(`A média é: ${media}. Não está acima da média`)
}

if (nota1 % 2 == 0){
    alert("Nota 1 é par")
} else {
    alert("Nota 1 é ímpar")
}

if (nota2 % 2 == 0){
    alert("Nota 2 é par")
} else {
    alert("Nota 2 é ímpar")
}