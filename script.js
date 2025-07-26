// 1. Напиши код, который решает примеры с картинки выше. Результаты округлить;
const a = 2;
console.log(a * a + a);

const numberOne = 54;
const numberTwo = 16;
const answer = (Math.sin(numberOne) * Math.cos(numberTwo)) ** a;
console.log(Math.round(answer * 1000) / 1000);

const answer2 = (((16 * Math.sqrt(13.2 * 71.9)) / (2.4 / (7 ** 4))) + (3 ** Math.sqrt(49))) * (2 **7);
console.log(Math.round(answer2));

/*2. Есть несколько числовых переменных (задай их самостоятельно). С помощью арифметических операторов 
и операторов сравнения определи, четное это число или нет;*/
let number1 = 256;
let number2 = 15;
let number3 = 82;

if (number1 % 2 === 0) {
    console.log(number1 + ' - чётное число')
} else (
    console.log(number1 + ' - нечётное число')
);
if (number2 % 2 === 0) {
    console.log(number2 + ' - чётное число')
} else (
    console.log(number2 + ' - нечётное число')
);
if (number3 % 2 === 0) {
    console.log(number3 + ' - чётное число')
} else (
    console.log(number3 + ' - нечётное число')
);

/* 3. Напиши программу, которая проверяет, если переменная name пуста или не задана, то в консоль должно выводиться
 сообщение "Hello, Guest!". Если переменная name содержит значение, то программа должна вывести сообщение
  "Hello, [name]!", где [name] — это значение переменной. */
let name1 ='Гаврила';

if (!name1){
    console.log('Hello, Guest!')
} else{
    console.log('Hello, ' + name1 + '!')
}