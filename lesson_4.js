console.log('Домашняя работа N4. Массивы. Задачи на методы, стр.8');


console.log('1. Создать функцию, которая дублирует входной массив.');
function doubleArray(arr1) {
    let arr2 = [].concat(arr1,arr1);
    return arr2;
}

let ars1 = [1,2,3];
let y = doubleArray(ars1);
console.log('Результат');
console.log(y);


console.log('');
console.log('2. Получить последний элемент массива.');
let arry = [1,2,3,4,5,28];
function lastElement(arry) {
    return arry[arry.length-1];
}

y = lastElement(arry);
console.log('Последний элемент массива = '+y);


console.log('');
console.log('3. Создать функцию, которая заполняет массив числами от 1 до N.');

let n = 10;

function getArray(n) {
    let arr = [];
 
// это раскоментировать ели реально надо вводить число N 
// 
//    while ( n <= 0 ) {        
//        n = prompt('Введите число N > 0', 10);
//    }
    
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    
    return arr;
    
}

let x = getArray(n);
    console.log ('Массив от 1 до '+x.length);
    console.log (x);

console.log('');
console.log('4. Создать функцию, которая принимает произвольное число массивов, удаляет из каждого первый элемент, возвращает массив из оставшихся значений.');

let arr,
    arr1 = [2,5,8,777], 
    arr2 = ['Masha', 'Bear'],
    arr3 = [];

function changeCollection(...args) {
    const newArr = [];
       
    if (arguments.length == 0) {
        return('Функции вообще ничего не передали. Попробуйте еще раз!');
    } 
            
       args.forEach(function (item){
           if (item.length > 0) {
            item.shift(); 
            newArr.push(item);
        } else {
            return('Массив пустой. Попробуйте еще раз!');
        }
       });
    
    return newArr;    
}

console.log(arr1, arr2,arr3);
//x = changeCollection();
//console.log('Получаем результат => ', x);

x = changeCollection(arr1, arr2, arr3);
console.log('Получаем результат => ', x);


//x = changeCollection(arr2);
//console.log('Получаем результат => ', x);

console.log('');
console.log('');
console.log('Массивы. Задачи, стр.21');
console.log('1. В произвольной строке \'bcdaeflmjgkhi\' упорядочить буквы по алфавиту, и вернуть строку  с буквами в обратном порядке.');
let stroka ='bcdaeflmjgkhi';
function stringSortReverse(stroka) {
    stroka = stroka.split('').sort().reverse().join('');
    return stroka;
}

x = stringSortReverse(stroka);
console.log('Получаем результат => ', x);

console.log('');
console.log('2. Отсортировать массив [2,4,7,1,-2,10,-9] в обратном порядке.');

let massiv = [2,4,7,1,-2,10,-9];

function arraySortReverse(massiv) {
    massiv = massiv.sort(function(a,b){
        return a-b;
    }).reverse();
    return massiv;
}

x = arraySortReverse(massiv);
console.log('Получаем результат => ', x);

console.log('');
console.log('3. Написать функцию, которая принимает массив и 2 числа, a и b. Функция должна вернуть новый массив, состоящий из элементов исходного массива с a-того по b-ый элемент. Исходный массив не менять, циклы не использовать.');

function gentNewArray(dim, a,b) {
    let dim2 = dim.slice(a,b+1);
    
    return dim2;
}

let dimension = [1,2,3,4,5,6,7,8,9,0],
    d1 = 2,
    d2 = 5;
x = gentNewArray(dimension, d1, d2);
console.log('Исходный массив => ', dimension);
console.log('Получаем результат => ', x);

console.log('');
console.log('4. Удвоить все элементы массива, не используя циклы.');
let arrdup = ['one', 2, 'tree', 4];
function arrayDuplicate(arrdup) {
    let arr2 = [].concat(arrdup,arrdup);
    return arr2;
}

x = arrayDuplicate(arrdup);
console.log('Получаем результат => ', x);


console.log('');
console.log('5. Удалить из [1,2,3,4,5] второй и третий элементы (3,4).');
let oldArray = [1,2,3,4,5];
    console.log(oldArray.splice(2,2));

console.log('');
console.log('6. Удалить из [1,2,3,4,5] второй и третий элементы (3,4) и на их место вставить "three", "four".');

oldArray = [1,2,3,4,5];
let pos1 = oldArray.indexOf(3),
    pos2 = oldArray.indexOf(4),
    inc = ['three', 'four'],
    nearArr1 = oldArray.slice(0,pos1),
    nearArr2 = oldArray.slice(pos2+1,oldArray.length),
    newArr = nearArr1.concat(inc,nearArr2);

console.log(newArr);

console.log('');
console.log("7. Вставить в массив ['I','am','an','array'] после третьего элемента слово awesome.");
oldArray = ['I','am','an','array'];
inc = 'awesome';
pos1 = 3;
nearArr1 = oldArray.slice(0,pos1);
nearArr2 = oldArray.slice(pos1,oldArray.length);
newArr = nearArr1.concat(inc,nearArr2);

console.log(newArr);

console.log('8. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие.');
let arrInArr = [
    [14,45],
    [1],
    ['a','c','d']
];

function arraySort(massiv) {
    massiv = massiv.sort();
    return massiv;
}

x = arraySort(arrInArr);
console.log('Получаем результат => ', x);

console.log('');
console.log('9. Создать копию произвольного масива через slice и concat.');

function copyArray(dim, a,b) {
    let dim2 = dim.slice(a,b+1);
    
    return dim2;
}

dimension = [0,11,22,33,44,55,66,77,88,99];
    d1 = 3;
    d2 = 7;
x = copyArray(dimension, d1, d2);
console.log('Исходный массив => ', dimension);
console.log('Получаем результат => ', x);

console.log('');
console.log('10. Отсортируйте массив объектов по возрастающему количеству ядер(cores).');
let objInArr = [
    {cpu:'intel', info:{cores:2, cache:3}},
    {cpu:'intel', info:{cores:4, cache:4}},
    {cpu:'amd',   info:{cores:1, cache:1}},
    {cpu:'intel', info:{cores:3, cache:2}},
    {cpu:'amd',   info:{cores:4, cache:2}}
]

function sortObj(massiv){
let result = [];
    
    result = massiv.sort(function(a,b){
        return a.info.cores - b.info.cores;
    });
    
    return result;
}

x = sortObj(objInArr);
console.log('Получаем результат => ', x);

console.log('');
console.log('11. Создать функцию, которая принимает масив продуктов и 2 цены a и b, находит все продукты  с ценами между a и b. Результат сортируется по возрастанию цены');
const products = [
    {title:'prod1', price:5.2},
    {title:'prod2', price:0.18},
    {title:'prod3', price:15},
    {title:'prod4', price:25},
    {title:'prod5', price:18.9},
    {title:'prod6', price:8},
    {title:'prod7', price:19},
    {title:'prod8', price:63}    
];

function filterProducts(massiv,a,b) {
   let result = [],
       min = a,
       max = b;
    
    function sortObj(massiv){
        let res = [];
            res = massiv.sort(function(a,b){
                return a.price - b.price;
            });
            return res;
        }
    
    massiv.forEach(function (item){
           if ((item.price > a) && (item.price < b)) {
            result.push(item);
        }
        
    });
    
    result = sortObj(result);
        
    return result;
}
                   
x = filterProducts(products,5,20);
console.log('Получаем результат => ', x);   
console.log('');
console.log('');

console.log('Дата и время. Задачи, стр.14');
console.log('1. Написать функцию, которая принимает год, а возвращает день 1 января этого года по русски.');
let year = 2018;
function firstDayOfYear(year) {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];    
    let date = new Date(year, 0, 1); //2018 январь 1    
    let day = date.getDay();
    return days[day];
}

x = firstDayOfYear(2018);
console.log('Получаем результат => ', x);

console.log('');
console.log('2. Написать функцию, которая принимает дату в виде строки "29.03.1985" а возвращает день по русски. Формат даты день.месяц.год');
let data = '29.03.1985';
function dayOfYear(data) {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];   
    let arr = []; 
    arr = data.split('.');
    let date = new Date(arr[2], arr[1]-1, arr[0]); 
    let day = date.getDay();
    return days[day];
}

x = dayOfYear(data);
console.log('Получаем результат => ', x);


console.log('');
console.log('3. Узнать, сколько прошло полных недель с любой даты до сегодня.');
data = prompt('Введите дату в формате d.MM.YYYY', data);

function fullWeeksCounter(data) { 
    let arr = data.split('.');
    
    // Первая дата (год, месяц, день)
    let Date1 = new Date(arr[2], arr[1]-1, arr[0]); 
    
    // Текущая дата (год, месяц, день)
    let Date2 = new Date ();

    // Сколько целых дней между датами
    let Days = Math.floor((Date2.getTime() - Date1.getTime())/(1000*60*60*24));
    let Weeks = Math.floor(Days/7);
    console.log(Days);
    return Weeks;
}

console.log('Получаем результат => ', fullWeeksCounter(data), '- полных недель от введенной даты');