"use strict";

let newData;

//1) Написать две функции для реализации AJAX запросов: getData и sendData

const getData = (url) => {
  return fetch(url).then((response) => response.json());
};

const sendData = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      //"Content-type": "multipart/form-data",
    },
  }).then((response) => response.json());
};

//3) Реализовать получение данных из файла .json (прикреплен под видео)  через функцию getData
//http://127.0.0.1:5501/db.json

getData("db.json")
  .then((data) => {
    newData = JSON.stringify(data);
  })
  .then((data) => console.log(newData));

//4) После получения объекта из файла .json должна произойти отправка данных (которые мы получили из файла .json)
//на URL через функцию sendData

//https://jsonplaceholder.typicode.com/posts

sendData("https://jsonplaceholder.typicode.com/posts", newData)
  .then((newData) => console.log(newData))
  .catch((error) => console.log(error));

// 5) Ошибки должны быть обработаны
