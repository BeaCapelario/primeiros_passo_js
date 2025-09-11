peso = Number(prompt("Digite seu peso:"))
altura = Number(prompt("Digite sua altura:"))

let calculo = peso / (altura * altura)

if (calculo < 18.5){
    alert(`Seu IMC é ${calculo}. Você está abaixo do peso`)
}else if (calculo > 18.5 && calculo < 24.9){
    alert(`Seu IMC é ${calculo}. Você está com o peso normal`)
}else if (calculo > 25 && calculo < 29.9){
    alert(`Seu IMC é ${calculo}. Você está em sobrepeso`)
}else if (calculo > 30 && calculo < 34.9){
    alert(`Seu IMC é ${calculo}. Você está em Obesidade Grau I`)
}else if (calculo > 35 && calculo <39.9){
    alert(`Seu IMC é ${calculo}. Você está em Obesidade Grau II `)
}else{
    alert(`Seu IMC é ${calculo}. Você está Obesidade Grau III`)
}