const colors = document.querySelectorAll('.color');
function newColor(number) { // função para criar número do rgb
  return Math.floor(Math.random() * number);
} // random cria um nº qualquer de 0 a 1 e floor tira os decimais
function anyColor() { // para mudar o background aleatoriamente
  colors[1].style.backgroundColor = `rgb(${newColor(255)} , ${newColor(255)} , ${newColor(255)})`;
  colors[2].style.backgroundColor = `rgb(${newColor(255)} , ${newColor(255)} , ${newColor(255)})`;
  colors[3].style.backgroundColor = `rgb(${newColor(255)} , ${newColor(255)} , ${newColor(255)})`;
}

window.onload = anyColor;
// definindo a paleta selecionada
for (let i = 0; i < 4; i += 1) {
  colors[i].addEventListener('click', function () {
    if (i === 0) {
      colors[0].className += ' selected';
      colors[1].className = 'color red';
      colors[2].className = 'color blue';
      colors[3].className = 'color green';
    } else if (i === 1) { // 255 porque acho que é o maior valor do rgb
      colors[0].className = 'color black'; // e porque será gerado um número entre 0 e 255
      colors[1].className += ' selected';
      colors[2].className = 'color blue';
      colors[3].className = 'color green';
    } else if (i === 2) {
      colors[0].className = 'color black';
      colors[1].className = 'color red';
      colors[2].className += ' selected';
      colors[3].className = 'color green';
    } else if (i === 3) {
      colors[0].className = 'color black';
      colors[1].className = 'color red';
      colors[2].className = 'color blue';
      colors[3].className += ' selected';
    }
  });
}

function deleteAll() { // apagar tudo para fazer conforme o usuário desejar
  while (document.querySelector('.pixel-board').firstChild) {
    document.querySelector('.pixel-board').removeChild(document.querySelector('.pixel-board').firstChild);
  }
}

const userInput = document.querySelector('#board-size');
// usuário escolhe o tamanho do quadro
document.querySelector('#generate-board').addEventListener('click', function () {
  if (userInput.value === '') {
    alert('Board inválido!');
  } else if (userInput.value < 5) {
    userInput.value = 5;
  } else if (userInput.value > 50) {
    userInput.value = 50;
  }

  deleteAll();

  for (let k = 0; k < userInput.value; k += 1) {
    const newLine = document.createElement('div');
    newLine.className = 'tr';
    document.querySelector('.pixel-board').appendChild(newLine);

    for (let j = 0; j < userInput.value; j += 1) {
      const newRowPixels = document.createElement('div');
      newRowPixels.className = 'pixel';
      newLine.appendChild(newRowPixels);
    }
  }
});

const tableData = document.querySelectorAll('.pixel');
// todos os pixels são clicáveis e recebem cor
for (let i = 0; i < tableData.length; i += 1) {
  tableData[i].addEventListener('click', function () {
    tableData[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
  document.querySelector('#clear-board').addEventListener('click', function () {
    tableData[i].style.backgroundColor = 'white';
  });
}
