const selecionado = document.getElementById('black');
if (selecionado.classList) selecionado.classList.add('selected');
else selecionado.className += ' selected';

const cores = document.querySelectorAll('.color');
for (let i = 0; i < cores.length; i += 1) {
  cores[i].addEventListener('click', mudaClasse);
}
function mudaClasse(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}
const pixels = document.getElementsByClassName('pixel');
for (const pixel of pixels) {
  pixel.addEventListener('click', mudaCor);
}
function mudaCor(event) {
  const element = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(element);
  const bgColor = cssObj.getPropertyValue('background-color');
  event.target.style.backgroundColor = bgColor;
}

function limpa() {
  const botao = document.getElementById('clear-board');
  botao.addEventListener('click', () => {
    const quadradinhos = document.getElementsByClassName('pixel');
    for (const pixel of quadradinhos) {
      pixel.style.backgroundColor = 'white';
    }
  });
}

limpa();

/* let pixels = document.querySelectorAll('.pixel')
let pixels = document.getElementsByClassName('pixel');
let cssObj = window.getComputedStyle(pixels, null);
let bgColor = cssObj.getPropertyValue
('background-color');

for (let pixel of pixels) {
        pixel.addEventListener('click', function(event){
            let pintar = document.querySelector('.selected')
            console.log(pintar.id)
            event.target.
    )}
}

function mudaCor(){
    let pixels = document.querySelector('#pixel-board');
    pixels.addEventListener('click', function(event) {
    event.target.style.backgroundcolor = pixels.style.backgroundcolor
})
}

 /*for (i = 0; i < pixels.length; i += 1) {
    let pixelSelecionado = pixels[i];
    let corSelecionada = document.querySelector('.selected');
    pixelSelecionado.addEventListener('click', function(event){
        event.target.style.backgroundcolor = corSelecionada.syle.backgroundcolor
    })
 }
}
*/
