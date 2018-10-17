console.log('Домашняя работа N3. Функция. Задачи');
console.log('1. Создать функцию multiply, которая будет принимать любое кол-во параметров и возвращать их произведение. Если нет ни 1 аргумента - вернуть 0.');

function multiply() {
    let multiplication = 1; 
    
    if (arguments.length === 0) {
        multiplication = 0;
    }
    else 
        {
            for ( let i=0; i < arguments.length; i++) {
                multiplication *= arguments[i];
            }
        }
    
    return multiplication;
}

console.log('Результат = ' + multiply());

console.log('Результат = ' + multiply(1,2,3));

console.log('2. С помощью рекурсии вычислить Факториал числа от 1 до n.');

function factorial(n) {
    let fact = 1; 
    
    if (n <= 1) {
        fact = 1;
    }
    
    else {
        fact = n * factorial (n-1)
    }

    return fact;
}
    
console.log('Результат = ' + factorial(10));


console.log('3. Создать функцию, которая возвращает строку перевертыш.');

function reverseString(test) {
    let reverse = ''; 
    
    if (arguments.length == 0) {
        reverse = "Функции вообще ничего не передали. Попробуйте еще раз!"
    }    
    else {
        if (test.length > 0) {
            for ( let i = test.length-1; i >= 0; i--) {
                reverse += test[i];
            }
        }
        
        if (test.length == 0) {
                reverse = "Функции передали пустую строку. Попробуйте еще раз!";
        }
        
    }
    return reverse;
}

console.log('Результат = ' + reverseString());
console.log('Результат = ' + reverseString(''));
console.log('Результат = ' + reverseString('Ералаш'));

console.log('4. Создать функцию, которая возвращает юникод каждого сиивола в строке.');

(function() {
    function uniCode(test) {
    let uni = ''; 
    
    if (arguments.length == 0) {
        uni = "Функции вообще ничего не передали. Попробуйте еще раз!"
    }    
    else {
        if (test.length > 0) {
            for ( let i = 0; i < test.length; i++) {
                uni = uni + ' ' + test.charCodeAt(i);
            }
        }
        
        if (test.length == 0) {
                uni = "Функции передали пустую строку. Попробуйте еще раз!";
        }
        
    }
    
    uni = uni.slice(0,-1);
    return uni;
}

x = uniCode('Ералаш');
console.log('Результат = ' + x);

});

console.log('5. С помощью рекурсии вывести каждый символ строки в консоль.');

const printChars = (test, i = 0) => {
    
    if (i < test.length) {
        console.log(test[i]);
        printChars (test, i+1);
    }
};

printChars ('Турбо');


console.log('6. Функции и колбеки.');

console.log('6.1. ------- ');
function firstF(array, callback) {
    let news = [];
    
    for (i = 0; i < array.length; i++) {
        news.push(callback(array[i]));
    }
    
    return "New value: " + news.join('');
}

function callback(item) {
    let c1 = item.slice(0,1);
        c2 = item.slice(1,item.length);
    return item =c1.toUpperCase()+c2; 
}

console.log(firstF(['my','name','is','Trinity'], callback));


console.log('6.2. ------- ');
function firstFunc(array, secondFunc) {
    let result = [];
    
    for (i = 0; i < array.length; i++) {
        result.push(secondFunc(array[i]));
    }
    
    return "New value: " + result.join(', ');
}

function secondFunc(item) {
    return item + '0';
}

console.log(firstFunc(['10','20','30'], secondFunc));

console.log('6.3. ------- ');

function proc1(sentence, proc2) {
    let result = [];
    
    for (i = 0; i < sentence.length; i++) {
        result.push(proc2(sentence[i]));
    }
    
    return "New value: " + result.join(',');
}

function proc2(item) {
    let reversed = '';
    
    return item.name + ' is ' + item.age;
    
}

console.log(proc1([{age:45, name:'John'},{age:20, name:'Aaron'}], proc2));



console.log('6.4. ------- ');

function firstProc(sentence, reverse) {
    let result = [];
    
    for (i = 0; i < sentence.length; i++) {
        result.push(reverse(sentence[i]));
    }
    
    return "New value: " + result.join(',');
}

function reverse(item) {
    let reversed = '';
    
    for (let jj = item.length-1; jj >= 0; jj--) {
        
        reversed += item[jj];
    }
    return reversed;
}

console.log(firstProc(['abc','123'], reverse));


console.log('6.5. ------- ');
function func1(array, func2) {
    let result = [];
    
    for (i = 0; i < array.length; i++) {
        result.push(func2(array[i]));
    }
    
    return "New value: " + result.join(', ');
}

function func2(item) {
    return item + 5;
}

console.log(func1([1,2,3], func2));