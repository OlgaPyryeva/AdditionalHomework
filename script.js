//1) Повесить на кнопку обработчик события click и реализовать такой функционал:

//В input[type=text] можно ввести цвет: red, green, blue и так далее.
//По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата

//Работать должно так: ввели в input[type=text] yellow, по нажатию на кнопку значение input[type=text] попадает в свойство style="backgroundColor: yellow" и фон квадрата должен поменяться
const btn = document.getElementById("btn");
const colorInput = document.querySelector('input[type = "text"]');
const square = document.getElementById("square");

const changeColor = function (event) {
  square.style.backgroundColor = event.target.value;
  console.log(event.target);
};

btn.addEventListener("click", changeColor);
//btn.onclick = changeColor;
console.log(btn);
//colorInput.addEventListener("change", changeColor);

//2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "

//3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:

//при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!)
