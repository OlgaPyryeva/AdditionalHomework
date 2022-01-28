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

console.log(result); // ч.2 дз - получили произведение чисел из которых состоит переменная num

result **= 3; // ч.3 дз возвели в степень 3
//console.log(typeof result); тип число
result = String(result);
console.log(result.substr(0, 2)); // ч.4 дз - первые 2 цифры после возведения в степень
