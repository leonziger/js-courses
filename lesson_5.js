console.log('Домашняя работа N 5. this. Задачи');
console.log('1. Создать объект, у которого будет высота и ширина прямоугольника и его площадь.');
const rectangle = {
    width: '10 cm',
    height: '15 cm',
    getSquare: function(){
        return parseInt(this.width) * parseInt(this.height);
    }
}
console.log(rectangle.getSquare());

console.log('2. Создать объект, у которого будет цена товара и его скидка, а также 2 метода: для получения цены и расчета цены со скидкой.');
const price = {
    price: 10,
    discount: '15%',
    getPrice: function(){
        return this.price;
    },
    getPriceWithDiscount: function(){
        return (this.getPrice() - parseInt(this.discount)/100);
    }
}
console.log(price.getPrice(),' --- ', price.getPriceWithDiscount());

console.log('3. Из объекта вывести имя');
const user = {name: 'Abraham'},
      getUserName = function(){
          return this.name;
      };
user.getUserName = getUserName;
console.log(user.getUserName());

console.log('4. Создать объект c полем "высота" и методом "увеличить высоту на 1"');
const obj = {
    height: 10,
    increment: function(){
        this.height++;
        return this;
    }
}
obj.increment()
console.log(obj.height);

console.log('5. Создать объект "вычислитель", методы вызывать по цепочке.');
const numerator = {
    value: 1,
    double: function(){
        this.value *= 2;
        return this;
        
    },
    plusOne: function(){
        this.value++;
        return this;
    },
    minusOne: function(){
        this.value--;
        return this;
    }
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

console.log('6. Разобрать, что происходит.');
const buser = {name: 'Abraham'},
      otherBuser = {
          name: 'John',
          getName: function(){
              return this.name;
          }
      }
buser.getName; // выведет undefined, потому что в объекте user нет метода getName
buser.getName = otherBuser.getName; // в объекте user мы создаем метод getName, которые есть копия метода getName из объекта otherUser
buser.getName(); // выведет Abraham
otherBuser.getName(); // выведет John

console.log('');
console.log('this. Задачи, продолжение');
console.log('2. Создать объект с розничной ценой и кол-вом продуктов. Объект должен содержать метод, для получения общей стоимости всех товаров.');
const obyect = {
    price: '30$',
    quantity: 30,
    totalQuantity: function(){
        return parseInt(this.price)*this.quantity;
    }
}
console.log(obyect.totalQuantity());

console.log('3. Создать объект из предыдущей задачи. Создать второй объект, который описывает кол-во деталей и цену за одну деталь. ' +
    'Для второго объекта нужно узнать общую стоимость всех деталей, позаимстовав метод из предыдущего объекта.');
const obj1 = {
    price: '30$',
    quantity: 30,
    totalQuantity: function(){
        return parseInt(this.price)*this.quantity;
    }
},
      obj2 = {
    price: '100uah',
    quantity: 70
}
console.log(obj1.totalQuantity.call(obj2));

console.log('4. Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes.');
let sizes = {
    width:5, 
    height:10
},
    getSquare = function(){
        return this.width * this.height;
    };
console.log(getSquare.call(sizes));

console.log('5. Используя ссылку на массив и Math.min, найти минимальный элемент массива');
let numbers = [4,12,0,10,-2,4];

console.log(Math.min.apply(null,numbers));

console.log('6. Исправить  метод getFullHeight так, чтобы можно было вычислить высоту блока. Для другого объекта block, вычислить полную высоту getFullHeight, используя для этого объект element. В объект ничего не дописывать.');
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight(){
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
    }
};
const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
    };

console.log(element.getFullHeight.call(block));

console.log('7. Измените функцию getElementHeight так, чтобы вызвав getElementHeight() получить 25.');
(function(){
    let element = {
        height: 25,
        getHeight(){
            return this.height;
        }
    };
    let getElementHeight = element.getHeight.bind(element);
    
    console.log(getElementHeight());
}());