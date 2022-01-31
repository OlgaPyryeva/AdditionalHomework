let lang = prompt("Выберите язык дней недели", " en  или  ru");
let weekDays = "";
let n = +prompt("введите номер дня недели", "от 1 до 7");

//Решить через
//a) через if,

if (n == 1 && lang == "ru") {
  weekDays = "понедельник";
} else if (n == 1 && lang == "en") {
  weekDays = "monday";
} else if (n == 2 && lang == "ru") {
  weekDays = "вторник";
} else if (n == 2 && lang == "en") {
  weekDays = "tuesday";
} else if (n == 3 && lang == "ru") {
  weekDays = "среда";
} else if (n == 3 && lang == "en") {
  weekDays = "wednesday";
} else if (n == 4 && lang == "ru") {
  weekDays = "четверг";
} else if (n == 4 && lang == "en") {
  weekDays = "thursday";
} else if (n == 5 && lang == "ru") {
  weekDays = "пятница";
} else if (n == 5 && lang == "en") {
  weekDays = "friday";
} else if (n == 6 && lang == "ru") {
  weekDays = "суббота";
} else if (n == 6 && lang == "en") {
  weekDays = "saturday";
} else if (n == 7 && lang == "ru") {
  weekDays = "воскресенье";
} else if (n == 7 && lang == "en") {
  weekDays = "sunday";
} else {
  weekDays = "в неделе всего 7 дней / error";
}
console.log("Через иф " + weekDays);

// b) через switch-case

if (lang == "ru") {
  switch (n) {
    case 1:
      weekDays = "Понедельник";
      break;
    case 2:
      weekDays = "Вторник";
      break;
    case 3:
      weekDays = "Среда";
      break;
    case 4:
      weekDays = "Четверг";
      break;
    case 5:
      weekDays = "Пятница";
      break;
    case 6:
      weekDays = "Суббота";
      break;
    case 7:
      weekDays = "Воскресенье";
      break;
    default:
      weekDays = "Неверные данные";
  }
} else if (lang == "en") {
  switch (n) {
    case 1:
      weekDays = "Monday";
      break;
    case 2:
      weekDays = "Tuesday";
      break;
    case 3:
      weekDays = "Wednesday";
      break;
    case 4:
      weekDays = "Thursday";
      break;
    case 5:
      weekDays = "Friday";
      break;
    case 6:
      weekDays = "Saturday";
      break;
    case 7:
      weekDays = "Sunday";
      break;
    default:
      weekDays = "Wrong data";
  }
}
console.log("через switch-case " + weekDays);

//c) через многомерный массив без ифов и switch.
let days = [
  ["Понедельник", "Monday"],
  ["Вторник", "Tuesday"],
  ["Среда", "Wednesday"],
  ["Четверг", "Thursday"],
  ["Пятница", "Friday"],
  ["Суббота", "Saturday"],
  ["Воскресенье", "Sunday"],
];

lang == "ru"
  ? console.log(days[n - 1][0])
  : lang == "en"
  ? console.log(days[n - 1][1])
  : console.log("не правильно выбран язык");

//п.2 усложненного домашнего задания
let namePerson = prompt("Введите имя");
namePerson == "Артем"
  ? console.log("директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
