'use strict'

let editText = document.querySelector('.edit-text'); // переменная для div c текстом
let editArea = document.querySelector('.edit-area'); // переменная для textarea 

editArea.hidden = true; // Прячем textarea 

function callTextarea(event) { 
//если нажата клавиша 69  и  клавиша ctrl  и  спрятана textarea
	if(event.keyCode == 69 && event.ctrlKey && editArea.hidden){ // задаем событие при нажатии Ctrl+E 
		event.preventDefault(); // убираем событие по умолчанию
		// editArea.value = editText.innerHTML.trim(); // дублируем данные с div в textarea
		editText.hidden = true; // div показан
		editArea.hidden = false; // прячем div с текстом 
		editArea.focus(); // выводим textarea
	}
	if(event.keyCode == 83 && event.ctrlKey && !editArea.hidden){ // задаем событие при нажатии Ctrl+S
		event.preventDefault(); 
		editText.innerHTML = editArea.value;
		editText.hidden = false;
		editArea.hidden = true;
	}
	if(event.keyCode == 27 && !editArea.hidden){ // задаем событие при нажатии Esc
		event.preventDefault();
		editText.hidden = false;
		editArea.hidden = true;
	}
	if(event.keyCode == 82 && event.ctrlKey){ // задаем событие при нажатии Ctrl+R
		event.preventDefault();
		location.reload();
	}
}

document.addEventListener('keydown', callTextarea); // для всего документа присваеваем событие keydown (которое происходит при нажатии заданых клавиш) и функцию callTextarea