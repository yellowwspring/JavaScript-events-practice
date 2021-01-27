// переменная block - элемент div с id "square"
let block = document.getElementById('square');


// изменение цвета при клике мыши
block.onclick = function () {
    this.style.background = "red";
}


// изменение цвета при двойном нажатии мыши
block.ondblclick = function () {
    this.style.borderRadius = "10px";
}


// мышь на объекте
block.onmouseenter = function () {
    this.style.background = "pink";
}


// увеличение ширины квадрата при наведении курсора
let a = 0;
block.onmousemove = function (){
    a++;
    this.style.width = 100 + a + 'px';
}
