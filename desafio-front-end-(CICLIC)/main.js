var app = document.getElementById('app');

document.getElementById('simular').onclick = function () {
	var name = document.getElementById('nome').value;
	var mensal = document.getElementById('mes').value;
	var time = document.getElementById('contri').value;

	if (name == '' || mensal == '' || time == '') {
		alert('Erro: (Os campos não podem estar vazios)')
	} else {

		axios.post('https://api.mathjs.org/v4/', {
				"expr": mensal * (((1 + 0.00517) ** time - 1) / 0.00517),
				"precision": 5
			})
			.then(response => {
				console.log(`Olá ${name}, juntando R$${mensal} todo mês, você terá R$${response.data.result} em ${time} meses`);
				localStorage.setItem('nome', name);
				localStorage.setItem('mensal', mensal)
				localStorage.setItem('time', time)
				localStorage.setItem('resultado', response.data.result)
				window.location.href = 'segundaTela.html'
			})
			.catch(error => {
				console.log('error')
			})
	}
}