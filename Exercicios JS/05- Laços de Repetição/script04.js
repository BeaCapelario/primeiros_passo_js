let num = Number(prompt("Digite um número inteiro para calcular o fatorial:"));

let fatorial = 1;

for (let i = 1; i <= num; i++) {
    fatorial *= i; // fatorial = fatorial * i
}

alert(`O fatorial de ${num} é ${fatorial}`);
