//1.Восстановить порядок книг.

const books = document.querySelectorAll(".book");
books[0].before(books[1]);
books[4].before(books[2]);
books[3].before(books[4]);
books[5].after(books[2]);

//2.Заменить картинку заднего фона на другую из папки image

const bodyStyle = document.getElementsByTagName("body")[0];
bodyStyle.style.backgroundImage = "url(./image/adv.jpg)";

//3.Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

books[4].querySelector("h2>a").textContent =
  "Книга 3. this и Прототипы Объектов";

//4.Удалить рекламу со страницы

const advertising = document.querySelector(".adv");
advertising.style.display = "none";

//5.Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
const chapters = books[0].querySelectorAll("div > ul");
const chapter = chapters[0].querySelectorAll("li");
chapter[9].after(chapter[2]);
chapter[8].after(chapter[7]);
chapter[6].before(chapter[3]);
chapter[8].after(chapter[4]);
chapter[4].after(chapter[5]);

const chaptersBookFour = books[5].querySelectorAll("div > ul");
const chapterBookFour = chaptersBookFour[0].querySelectorAll("li");
chapterBookFour[4].after(chapterBookFour[2]);
chapterBookFour[6].after(chapterBookFour[5]);
chapterBookFour[6].after(chapterBookFour[7]);
chapterBookFour[1].after(chapterBookFour[9]);

//6.в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

const newChapter = document.createElement("li");
newChapter.textContent = "Глава 8: За пределами ES6";
const chaptersBookSix = books[2].querySelectorAll("div > ul");
const chapterBookSix = chaptersBookSix[0].querySelectorAll("li");
chapterBookSix[8].after(newChapter);
