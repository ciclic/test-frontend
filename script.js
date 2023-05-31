const telaUm = document.querySelector(".telaUm");
const inputNome = document.querySelector(".inputNome");
const inputValor = document.querySelector(".inputValor");
const inputTempo = document.querySelector(".inputTempo");
const inputTaxa = document.querySelector(".inputTaxa");
const btnSimular = document.querySelector(".btnSimular");

const telaDois = document.querySelector(".telaDois");
const dadosNome = document.querySelector(".dadosNome");
const dadosValor = document.querySelector(".dadosValor");
const dadosTempo = document.querySelector(".dadosTempo");
const dadosTaxa = document.querySelector(".dadosTaxa");
const dadosTotal = document.querySelector(".dadosTotal");
const btnNovamente = document.querySelector(".btnNovamente");

// Pegar a resposta que vem da API e mostrar os dados digitados na tela um juntamente com a resposta na tela dois
function pegarResposta() {
    const meses = inputTempo.value * 12;
    const taxa = inputTaxa.value / 100;

    fetch("http://api.mathjs.org/v4/", {
        method: "POST",
        body: JSON.stringify({
            "expr": `${inputValor.value} * (((1 + ${taxa}) ^ ${meses} - 1) / ${taxa})`
        })
    })
    .then(response => response.json())
    .then(result => {
        const resultado = parseFloat(result.result);
        const resultadoFormatado = resultado.toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        dadosNome.innerText = `Olá, ${inputNome.value}`
        dadosValor.innerText = `Se você investir R$ ${inputValor.value} ao mês`
        dadosTaxa.innerText = `A uma taxa de juros de ${inputTaxa.value}% ao mês`
        dadosTempo.innerText = `Em ${inputTempo.value} anos você tera acumulado um total de`
        dadosTotal.innerText = `R$ ${resultadoFormatado}`
    })
}

// Ir para a tela dois
btnSimular.addEventListener("click", (e) => {
    e.preventDefault();
    pegarResposta();

    if (!/^[\p{L}\s']{3,20}$/u.test(inputNome.value) || inputValor.value < 1 || inputTempo.value < 1 || inputTaxa.value < 0.01) {
        alert(
            "Preencha todos os dados corretamente para simular \n\n" +
            "Nome: no minimo 3 letras \n" +
            "Valor ao mês: no minimo R$ 1 \n" +
            "Tempo: no minimo 1 ano \n" +
            "Taxa de juros: no minimo 0.01 ao mês");
    } else {
        telaUm.style.display = "none"
        telaDois.style.display = "flex"
    }
});

// Voltar para a tela um
btnNovamente.addEventListener("click", () => {
    telaDois.style.display = "none";
    telaUm.style.display = "flex"
});