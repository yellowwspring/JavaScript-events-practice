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
    console.log("Мышь на квадрате!")
    this.style.background = "pink";
}


// увеличение ширины квадрата при наведении курсора
let a = 0;
block.onmousemove = function (){
    a++;
    this.style.width = 100 + a + 'px';
}

// нажатие и удержание кнопки мыши(любой)
let c = 0;
block.onmousedown = function (event) {
    console.log("Удерживаю!");
    this.style.cursor = "crosshair"
    console.log(event.button); // выдаст инормацию какая кнопка была нажата 0 - левая. 1 - колёсико . 2 - правая.
}


// отпускаю нажатие внутри блока
block.onmouseup = function (){
    this.style.width = "80px";
}

