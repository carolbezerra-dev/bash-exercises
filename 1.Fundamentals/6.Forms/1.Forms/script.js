const estadosBR = [
	'Selecione aqui',
	'Acre (AC)',
	'Alagoas (AL)',
	'Amapá (AP)',
	'Amazonas (AM)',
	'Bahia (BA)',
	'Ceará (CE)',
	'Distrito Federal (DF)',
	'Espírito Santo (ES)',
	'Goiás (GO)',
	'Maranhão (MA)',
	'Mato Grosso (MT)',
	'Mato Grosso do Sul (MS)',
	'Minas Gerais (MG)',
	'Pará (PA)',
	'Paraíba (PB)',
	'Paraná (PR)',
	'Pernambuco (PE)',
	'Piauí (PI)',
	'Rio de Janeiro (RJ)',
	'Rio Grande do Norte (RN)',
	'Rio Grande do Sul (RS)',
	'Rondônia (RO)',
	'Roraima (RR)',
	'Santa Catarina (SC)',
	'São Paulo (SP)',
	'Sergipe (SE)',
	'Tocantins (TO)',
];
for (let i = 0; i < estadosBR.length; i += 1) {
	const estado = document.createElement('option');
	document.querySelector('#estados').appendChild(estado);
	estado.value = i;
	estado.innerText = estadosBR[i];
}

document.querySelector('button').addEventListener('click', function () {
  let dd = document.querySelector('#dd').value;
  let mm = document.querySelector('#mm').value;
  let aaaa = document.querySelector('#aaaa').value;
	if (dd <= 0 || dd > 31) {
		alert('A data deve ter 2 números, maiores que 0 e menores ou iguais a 31');
	} else if (mm <= 0 || mm > 12) {
		alert('O mês deve ter 2 números, maiores que 0 e menores ou iguais a 12');
	} else if (aaaa <= 0) {
		alert('O ano deve ter 4 números e ser maior que 0');
	}
});
