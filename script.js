const selecionado = document.getElementById('cor1');

if (selecionado.classList) selecionado.classList.add ('selected');
else selecionado.className += ' selected';