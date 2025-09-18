let numSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 3;

while (tentativas > 0) {
    let chute = Number(prompt("Advinhe um número entre 1 e 100"));

    if (chute === numSecreto) {
        alert("Parabéns! Você acertou!");
        break; // sai do loop se acertar
    } else {
        tentativas--; // perde uma tentativa
        if (tentativas > 0) {
            alert("Errou! Tente novamente. Tentativas restantes: " + tentativas);
        } else {
            alert("Acabaram as tentativas! O número era " + numSecreto);
        }
    }
}