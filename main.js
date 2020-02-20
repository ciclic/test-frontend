//Valida o botão com a função abaixo
document.querySelector('button').addEventListener("click", function() {
	let name = document.getElementById('nome').value;
	let mensal = document.getElementById('mes').value;
	let time = document.getElementById('contri').value;
	//Se algum campo do formulário estiver vazio o código não prossegue
	if (name =="" || mensal =="" || time =="") {
		alert('Erro: Os campos não podem estar vazios');
	} else {
		//envia os dados pra api
		axios.post('https://api.mathjs.org/v4/', {
			"expr": mensal * (((1 + 0.00517) ** time - 1) / 0.00517),
			"precision": 5
		})
		.then(response => {
			//esconde o formulário e mostra a mensagem
			document.querySelector(".form").classList.toggle("hide");
			document.querySelector(".result").classList.toggle("hide");
			//conteúdo da mensagem
			document.querySelector(".result p").innerHTML = (`Olá <strong>${name}</strong>, juntando <strong>R$${mensal}</strong> durante <strong>${time} meses</strong>, você terá <strong>R$${response.data.result}</strong> no final.`);		
		})
		.catch(error => {
			console.log('error')
		})
	}
});

