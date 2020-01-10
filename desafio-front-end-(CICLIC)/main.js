var app = document.getElementById('app');

document.getElementById('simulador').onclick= function() {
    var name = document.getElementById('nome').value;
    var mensal = document.getElementById('mes').value;
    var time = document.getElementById('contri').value;

    axios.post('https://api.mathjs.org/v4/', {
        "expr":
            mensal * ((( 1 + 0.00517) ** time -1) / 0.00517),
        "precision": 5
    })
        .then(response =>{
            console.log(`Olá ${name}, juntando R$ ${mensal} todo mês, você terá R$ ${response.data.result} em ${time} meses`);
        })
        .catch(error =>{
            console.log('error')
        })

        /*  testes
        app.style.display='none';
}

function mensagem(){
    var texto = document.createElement('p')
    var conteudo = document.createTextNode('Funcionando');
    texto.appendChild(conteudo);

}  */
        




    
