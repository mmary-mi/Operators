// 1. Напиши программу, которая проверяет число и выводит сообщение, является ли 
// оно положительным, отрицательным или нулем;

const num = 35;

if (num === 0){
    console.log('Ноль');
} else if (num > 0) {
    console.log('Положительное');
} else {
    console.log('Отрицательное');
}

//2. Напиши программу, которая запрашивает у пользователя его рост и вес, на основании 
// этих данных вычисляет ИМТ, и выводит сообщение о том, в каком диапазоне находится его ИМТ;

const height = prompt('Введите ваш рост, м:');
const weight = prompt('Введите ваш вес, кг:');

let imt = weight / (height ** 2);

console.log('Ваш ИМТ: ' + imt);

//3. Используй оператор switch, чтобы вывести название месяца на основе введенного пользователем числа (1-12);
const month = 10;
let monthName;

switch (month) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрьь';
        break;
    default:
        monthName = 'Неверный месяц';
}

console.log(monthName); 

//4. Придумай свое условие и опиши его в помощью оператора switch/case.
// Пользователь вводит оценку 1-10, ему выводится её значение

const point = 10;
let pointName;

switch (point) {
    case 1:
        pointName = 'Неудовлетворительно';
        break;
    case 2:
        pointName = 'Почти удовлетворительно';
        break;
    case 3:
        pointName = 'Удовлетворительно';
        break;
    case 4:
        pointName = 'Весьма удовлетворительно';
        break;
    case 5:
        pointName = 'Хорошо';
        break;
    case 6:
        pointName = 'Весьма хорошо';
        break;
    case 7:
        pointName = 'Очень хорошо';
        break;
    case 8:
        pointName = 'Почти отлично';
        break;
    case 9:
        pointName = 'Отлично';
        break;
    case 10:
        pointName = 'Превосходно';
        break;
    default:
        monthName = 'Неверный балл';
}

console.log(point + ' - ' + pointName);