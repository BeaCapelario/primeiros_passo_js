const opcoes = ['Pedra', 'Papel', 'Tesoura'];

let jogarNovamente = true;

while (jogarNovamente) {
    const computador = opcoes[Math.floor(Math.random() * 3)];

    let jogador = prompt("Digite sua jogada! (Pedra, Papel ou Tesoura)");
    if (!jogador) break; // se cancelar, sai do jogo
    jogador = jogador.charAt(0).toUpperCase() + jogador.slice(1).toLowerCase();

    alert(`Você jogou: ${jogador}, Computador jogou: ${computador}`);

    if (jogador === computador) {
        alert("Empate!");
    } else if (
        (jogador === "Pedra" && computador === "Tesoura") ||
        (jogador === "Papel" && computador === "Pedra") ||
        (jogador === "Tesoura" && computador === "Papel")
    ) {
        alert("Você venceu!");
    } else {
        alert("Computador venceu!");
    }

    let resposta = prompt("Deseja jogar novamente? (Sim ou Não)");
    if (!resposta || resposta.toLowerCase() !== "sim") {
        jogarNovamente = false;
        alert("Obrigado por jogar!");
    }
}
