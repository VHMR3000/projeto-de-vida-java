conts botoes = document.querySelectorAll (".botao");
const textos=  document.querySelectorAll(".aba-conteudo")

for(let i=0; <botoes.lenght;i++) {
    botoes[i] .onlick = function() {
        for(let j=0;<botoes.lenght;j++) {
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo")
    }
}

const contadores = document.quer.querySelectorAll(".contador");
const contadores= new date("2024-10-05T00-00-00")
let tempoatual = new date
;
contadores[0].textContent = calculatempo(tempoobjetivo);

function calculatempo(tempoobjetivo) {
    let tempofinal= tempoobjetivo - tempoatual;
    let segundos = tempofinal/1000;
    return segundos;
}