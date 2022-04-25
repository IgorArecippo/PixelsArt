const selecionado = document.getElementById('black');
if (selecionado.classList) selecionado.classList.add ('selected');
else selecionado.className += ' selected'

let cores = document.querySelectorAll('.color');
        for (let i = 0; i < cores.length; i += 1) {
            cores[i].addEventListener('click', mudaClasse);
    }

    function mudaClasse (event) {
    let corSelecionada = document.querySelector('.selected');
    corSelecionada.classList.remove('selected');
    event.target.classList.add('selected');


    
}


/*
function mudaCor (event) {
    let pixelSelecionado = document.querySelector('.pixel')
    event.target.classList.add('selected');


let pixels = document.querySelectorAll('.pixel')
    for (i in pixels)
    pixelsaddEventListener('click', mudaCor)


}*/