let num = 266219;

//console.log(typeof num); тип число

num = String(num);

//console.log(typeof num); тип стал строка
//console.log(num.length); длинна равна 6
//console.log(num[0]); результат 2, получили первое число
let result = 1;

for (let i = 0; i < num.length; i++) {
  result *= num[i];
}

console.log(result);
