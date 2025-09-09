//Faça uma calculadora usando o conceito de Arrow Function;
alert("Calculadora")

const somarArrow = (a,b) => a + b;
const subtrairArrow = (a,b) => a - b;
const multiplicarArrow = (a,b) => a * b;
const dividirArrow = (a,b) => a / b;

let a = Number(prompt("Informe o valor 1"))
let b = Number(prompt("Informe o valor 2"))
let op = Number(prompt("Informe o numero da operação (1-Soma/2-Subtração/3-Multiplicação/4-Divisão)"))

switch(op){
    case 1:
        resultado = somarArrow(a,b);
        alert(resultado)
        break
    case 2:
        resultado = subtrairArrow(a,b);
        alert(resultado)
        break
    case 3:
        resultado = multiplicarArrow(a,b);
        alert(resultado)
        break
    case 4:
        resultado = dividirArrow(a,b);
        alert(resultado)
        break
}