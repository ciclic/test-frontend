var nome = localStorage.getItem('nome');
var tempo = localStorage.getItem('time');
var mensalidade = localStorage.getItem('mensal');
var resposta = localStorage.getItem('resultado');

var texto = document.querySelector('#mensagem').innerHTML=(`Hello ${nome}, saving $ ${mensalidade} every month, you'll have $ ${resposta} in ${tempo} mounths`);

localStorage.clear();


