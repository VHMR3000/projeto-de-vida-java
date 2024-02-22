conts botoes = document.querySelectorAll (".botao");

for(let i=0; <botoes.lenght;i++) {
    botoes[i] .onlick = function() {
        for(let j=0;<botoes.lenght;j++) {
            botoes[j].classList.remove("ativo");
        }
    }
}