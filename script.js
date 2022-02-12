//1) Повесить на кнопку обработчик события click и реализовать такой функционал:
//В input[type=text] можно ввести цвет: red, green, blue и так далее.
//По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата
//Работать должно так: ввели в input[type=text] yellow, по нажатию на кнопку значение input[type=text]
//попадает в свойство style="backgroundColor: yellow" и фон квадрата должен поменяться
const btn = document.getElementById("btn");
const colorInput = document.querySelector('input[type = "text"]');
const square = document.getElementById("square");

const changeColor = function (event) {
  square.style.backgroundColor = colorInput.value;
};

btn.addEventListener("click", changeColor);

//colorInput.addEventListener("change", changeColor);

//2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "
const circle = document.getElementById("circle");
circle.style.display = "none";

//3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:
//при каждом изменении положения ползунка значение input[type=range] необходимо заносить
//в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!)
const rangeInput = document.querySelector('input[type = "range"]');

const changeSize = function (event) {
  circle.style.display = "block";
  circle.style.height = rangeInput.value + "%";
  circle.style.width = rangeInput.value + "%";
};
rangeInput.addEventListener("input", changeSize);
