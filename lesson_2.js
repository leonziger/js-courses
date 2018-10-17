console.log('Домашняя работа N2. Задачи на строки');

let string = 'some test string',
    strLen = string.length-1;
console.log ('Исходная строка', string);

let firstChar = string[0];
let lastChar = string[strLen];


console.log('1. Получить первую и последнюю букву строки.');
console.log (firstChar);
console.log (string[strLen]);

console.log('2. Сделать первую и последнюю букву в верхнем регистре');

firstChar = firstChar.toUpperCase();
lastChar = lastChar.toUpperCase();

let shortString = string.slice(1,strLen);

console.log (firstChar+shortString+lastChar);

console.log('3. Найти положение слова string в строке');
console.log(string.indexOf('string', 0));

console.log('4. Найти положение второго пробела');
console.log(string.indexOf(' ', 6));

console.log('5. Получить строку с 5-го символа длиной 4 буквы');
console.log(string.substr(5, 4));

console.log('6. Получить строку с 5-го символа по 9-й');
console.log(string.substring(5, 9));

console.log('7. Получить строку, удалив из исходной 6 символов');
console.log('-'+string.slice(0, -6)+'-');

console.log('8. Из числовых переменных а=20 и b=16 получить строку string = "2016". ');
let a = 20, 
    b = 16;
string = a.toString() + b.toString();
console.log(string);

console.log('');
console.log('Задачи на циклы');


console.log('1. В строке "I am in easycode" сдедать первые буквы каждого слова заглавными');
let startString = "I am in easycode",
    finalString = '',
    arr = startString.split(' '),
    count = arr.length;

for (i = 0; i < count; i++) {
    
    for (let j = 0; j <= arr[i].length; j++) {
        
        if (arr[i].length == 1) {
            arr[i] = arr[i].toUpperCase();
        }
        else {
            let firstChar = arr[i][0].toUpperCase();
                
            arr[i] = firstChar + arr[i].slice(1, arr[i].length);
        }
    }
    
}

finalString = arr.join(' ');

console.log(finalString);

console.log('2. Сделать перевертыш из строки "tseb eht ma I"');
    startString = 'tseb eht ma I', 
    finalString = '',
    i = startString.length-1;

do {
    finalString += startString[i];
    i--;
}
while (i >= 0)

console.log(finalString);

console.log('3. Вычислить факториал числа 10');

let p = 1;

for (i = 1; i <= 10; i++) {
    p *= i;
}

console.log(p);

console.log('4. Создать строку "Считаем до 10и: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10" ');
startString = 'Считаем до 10и:';

for (i = 1; i <= 10; i++){
    startString = startString + " " + i + ', ';
}

console.log(startString.slice(0,-2));

console.log('5. JavaScript is a pretty good language" сдедать первые буквы каждого слова заглавными, удалить все пробелы');
    startString = "JavaScript is a pretty good language",
    finalString = '',
    arr = startString.split(' '),
    count = arr.length;

for (i = 0; i < count; i++) {
    
    for (let j = 0; j <= arr[i].length; j++) {
        
        if (arr[i].length == 1) {
            arr[i] = arr[i].toUpperCase();
        }
        else {
            let firstChar = arr[i][0].toUpperCase();
                
            arr[i] = firstChar + arr[i].slice(1, arr[i].length);
        }
    }
    
}

finalString = arr.join('');

console.log(finalString);

console.log('6. Найти все нечетные числа от 1 до 15 включительно');

for (i = 1; i <= 15; i++){
    if (i % 2 === 1) {
        console.log (i);
    }
}