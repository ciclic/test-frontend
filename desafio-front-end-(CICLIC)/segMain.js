var nome = localStorage.getItem('nome');
var tempo = localStorage.getItem('time');
var mensalidade = localStorage.getItem('mensal');
var resposta = localStorage.getItem('resultado');

var texto = document.querySelector('#mensagem').innerHTML=(`Olá ${nome}, juntando R$ ${mensalidade} todo mês, você terá R$ ${resposta} em ${tempo} meses`);

localStorage.clear();


