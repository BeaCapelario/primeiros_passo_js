// Função
// Estrutura básica: Palavra Reservada "Function" + "Nome da Função" + (Parametros) + {Script/Algoritmos}

function saudacao(){
    alert("Hello guys")
}

//Chama a função
saudacao();

/////////////////////////////////////////////////////////////////////////////////////////////

//Função de soma
function soma(a, b){
    //Para que meu usuário saiba qual o resultado da soma
    return a + b;
}

// Quem chama manda a lista de compras (parametros)
let resultado1 = soma(9,7)
alert(resultado1)

//////////////////////////////////////////////////////////////////////////////////////////////

//Função de Soma com Input
let valor1 = Number(prompt("Informe o valor 1"))
let valor2 = Number(prompt("Informe o valor 2"))

let resultado2 = soma(valor1, valor2)
alert(resultado2)

//////////////////////////////////////////////////////////////////////////////////////////////

// Arrow Function
