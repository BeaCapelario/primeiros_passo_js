largura = Number(prompt("Insira a medida da largura da parede:"))
altura = Number(prompt("Insira a medida da altura da parede:"))

let area = largura * altura;
let litros_tinta = area / 2;

alert(`A quantidade necessária para pintar a parede é: ${litros_tinta} litros`)
