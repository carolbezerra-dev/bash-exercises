const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

/* 1 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela */
function novoTurno(obj, key, value) {
	return (obj[key] = value);
}
novoTurno(lesson2, 'turno', 'manhã');
console.log(novoTurno(lesson2, 'turno', 'manhã'));
// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro
function justKeys(obj) {
  return Object.keys(obj);
}
console.log(justKeys(lesson1));
// 3 Crie uma função para mostrar o tamanho de um objeto
function objLength(obj) {
  return Object.keys(obj).length;
}
console.log(objLength(lesson3));
// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro
function justValues(obj) {
  return Object.values(obj);
}
console.log(justValues(lesson2));
/* 5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3 */
let allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
/* transformou os 3 objetos em 1 objeto, caso contrário um ficaria sobrescrevendo o outro já que as propriedades têm os mesmos nomes */
// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas
function studentsNumber(number1, number2, number3) {
  return number1 + number2 + number3;
}
console.log(studentsNumber(allLessons.lesson1.numeroEstudantes, allLessons.lesson2.numeroEstudantes, allLessons.lesson3.numeroEstudantes));
// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto
function getValueByNumber(param, number) {
	return Object.values(param)[number];
}
console.log(getValueByNumber(lesson1, 0));
/* 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave */
function verifyPair(obj, key, value) {
	let boolean = true;
	if (obj[key] === value) {
		boolean = true;
	} else {
		boolean = false;
	}
	return boolean;
}
console.log(verifyPair(lesson3,'materia', 'Maria Clara'));
// Bônus 1 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática
function justMath(param, key) {
	let count = 0;
	for(let i = 1; i <= 3; i += 1) {
		if(param[`lesson${i}`].materia === 'Matemática') {
			count += 1;
		}
	}
	return count
}
console.log(justMath(allLessons));
/* Bônus 2 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes */
function createReport(param, teacher) {
	const subject = [];
	let aux = 0;
	let students = 0;
	for (let i = 1; i <= 3; i += 1) {
		if (param[`lesson${i}`].professor === teacher) {
			subject.push(param[`lesson${i}`].materia);
			aux = param[`lesson${i}`].numeroEstudantes;
			students += aux;
		}
	}
	return `${teacher}, 
	aulas:  ${subject},
	estudantes: ${students}`;
}
console.log(createReport(allLessons, 'Maria Clara'));
