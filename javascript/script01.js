// //alert : Print
// alert("Olá DS19")

// //prompt : Input
// prompt("Qual seu nome?")

// //confirm : Te da duas opções Ok e Cancel
// confirm("É seu nome mesmo?")

// //let: variáveis com valores flexiveis
// let nome = prompt("Qual o seu nome?")
// alert("Bem vinda," + nome)

// //const: constantes, com valores fixos

alert("Olá, usuário!")
let nome = prompt("Me fale o seu nome:")
confirm("É seu nome mesmo?")
alert(`Olá! ${nome}, seja bem-vindo(a)`)

let materia = prompt("Agora me fale a sua matéria preferida:")
alert(`A matéria ${materia} é realmente é ótima!`)

prompt("Qual a data de hoje?")

confirm("Está preparado para o segundos semestre de Desenvolvimento de Sistemas?")

// //Media de 2 notas
 
// let nota1 = Number(prompt("Qual a sua 1 nota?"))
// let nota2 = Number(prompt("Qual sua segunda nota?"))
// let resultado = (nota1 + nota2)/2
// alert(`A sua média é de ${resultado}`)
 
let nota1 = parseFloat(prompt("Qual a sua 1 nota?"))
let nota2 = parseFloat(prompt("Qual sua segunda nota?"))
let resultado = (nota1 + nota2)/2
alert(`A sua média é de ${resultado}`)
 
 
//Condicionais: Se normalmente eu ainda tenho um senao, e isso pode ser programado
//A estrutura aqui no JS é if e else com chaves {}
 
if (resultado > 5){
    alert("Parabéns você passou de semestre")
    console.log(`Passou por esse if se ele for maior do que 5 ${resultado}`)
}else{
    alert("ÉEEE, não rolou, nos vemos em breve!")
   
 
    //console.log: é o print do DEV, ele é uma mensagem de acompanhamente secreta e secretante, quem vê essas mensagens é o desenvolvedor, ou os curiosos.
    //ele só aparece no inspecionar (f12 ou pelo botão direito)
}
 
//Laço de repetição
//é a execução de um bloco de codigo repetidamente, mediante a uma condição
//FOR: quando eu sei a quantidade de vezes que eu for rodar esse bloco, eu uso o for
// while rodo até atender uma condição. Por exemplo enquanto eu não receber uma resposta especifica.
//do while, executo ao menos uma vez e depois vejo se a condição é atendida.
 
//for: quando sei a quantidade de vezes q eu quero executar um codigo.
for(let i = 1; i<=10; i++){
    alert(i)
}
 
//while procura uma cindição
let contador = 20
while(contador <= 40){
   alert(contador)
   contador ++
}
 
//do while: executa pelo menos uma vez e depois procura a condição
 
let i =1
do{
    if(i % 2 != 0){
        alert(i)
    }
    i++
}while(i <= 20)