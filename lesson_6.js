console.log('Домашняя работа N6. Замыкания. Задачи');
console.log('2. Что будет выведено в консоль? Почему?');

let greet = 'Hello ';

(function(){
    let text = 'World';
    console.log(greet+text);  // тут будет выведено Hello World
}());

//console.log(greet+text); // тут будет выведено сообщение о том, что переменная text не описана ибо ее нет в глобальной  области видимости

console.log('3. Создайте функцию, которая умеет делать следующее:');
console.log(' - minus(10)(6) = 4,');
console.log(' - minus(5)(6) = -1,');
console.log(' - minus(10)() = 10,');
console.log(' - minus()(6) = 6,');
console.log(' - minus()() = 0.');

function minus(x){
    if (arguments.length == 0) { x = 0; }
    return function (y){
        if (arguments.length == 0) { y = 0; }
        if (x==0 && y>0) { return y-x; }

        return x-y;
    }
}
console.log(minus(10)(6));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

console.log('4. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами.');

function MultiplyMaker(x){
    return function(y){ // return function multiply
        return x *= y;
    }
}

const multiply = MultiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

console.log('5. Реализовать модуль, который работает со строкой.');

const module = (function(){
    let x = '';

    const setString = (text = '') => {
        x = text;

        if (typeof x === 'number') {
            x += '';
        }
    };

    const getString = () => x;

    const getLength = () => x.length;

    const getReverse = () => x.split('').reverse().join('');

    return {
        setString,
        getString,
        getLength,
        getReverse
    }
})();

module.setString('absd');
console.log('getString = ', module.getString());
console.log('getLength = ', module.getLength());
console.log('getReverse = ', module.getReverse());

console.log('6. Реализовать калькулятор.');

const calc = (function(){
    let number;

    const setValue = (x = 0) => {
        number = x;
        return self;
    };

    const addValue = (y = 0) => {
        number += y;
        return self;
    };

    const minusValue = (y = 0) => {
        number -= y;
        return self;
    };

    const multValue = (y = 0) => {
        number *= y;
        return self;
    };

    const powValue = (y = 0) => {
        number = Math.pow(number, y);
        return self;
    };

    const getValue = () => {
        return number.toFixed(2);
    };

    const self = {
        setValue,
        addValue,
        minusValue,
        multValue,
        powValue,
        getValue
    }

    return self;

})();

console.log(calc.setValue(10).powValue(2).getValue());
