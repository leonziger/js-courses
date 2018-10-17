console.log('Домашняя работа N7. Конструкторы. Задачи');
console.log('1. Создать конструктор для производства авто. Он должен принимать марку и возраст авто. Он должен иметь метод, ' +
    'который возвращает марку и который возвращает год машины (текущий год минус год выпуска авто');

(function(){
    function Car(brand, age) {
        this.brand = brand;
        this.age = age;
        this.getBrand = function(){
            this.brand = this.brand.toLowerCase().split('');
            this.brand[0] = this.brand[0].toUpperCase();
            this.brand = this.brand.join('');
            return (this.brand);
        };
        this.getProdYear = function(){
            const curDate = new Date ();
            return curDate.getFullYear() - this.age;
        };
     };

const carLexus = new Car('leXuS', 2);
console.log(carLexus.getBrand());
console.log(carLexus.getProdYear());

}());


console.log('2. Создать конструктор, который шифрует строки (делает перевертыши). Конструктор при инициализации получает строку и имеет следующие методы:');

(function(){
    function Coder(sentence) {
        this.sentence = sentence;
        this.origin = function(){
            return this.sentence;
        };
        this.encrypt = function(){
            return this.sentence.split('').reverse().join('');
        };
        this.kill = function(){
            delete this.sentence;
        }
    };

    const string = new Coder('Навуходоносор');
    console.log('2а. показать оригинальную строку');
    console.log(string.origin());

    console.log('2b. показать зашифрованую строку');
    console.log(string.encrypt());

    console.log('2c. стереть все данные');
    string.kill();
    console.log(string.origin());
}());

console.log('3. Создать класс, который создает экземпляры, работающие со строкой, имеет следующие свойства и методы:');

(function(){
    function ClassString(sentence) {
        this.sentence = sentence;
        this.getString = function() {
            return this.sentence;
        }
        this.setString = function(string) {
            this.sentence = string;
        }
        this.getLength = function() {
            return (this.sentence.length);
        }
        this.toString = function() {
            return (this.getString());
        }
        this.valueOf = function() {
            return (this.getLength());
        }
    }

    const str = new ClassString('test');
    console.log('3а. свойство "строка" будет содержать строку');
    console.log(str.getString());
    console.log('3b. методы для получения и установки строки');
    console.log(str.setString('++Bla---ZZ:::test!!!'));
    console.log(str.getString());
    console.log('3c. методы для получения и установки строки');
    console.log(str.getLength());
    console.log('3d. при вызове toString вернуть строку');
    console.log(str.toString());
    console.log('3e. при приведении объекта к числу вернуть длину строки');
    console.log(+str);
}());

console.log('ООП. Задачи на стр 39');
console.log('1. Есть класс Planet. Создать его наследника, который будет принимать название спутника. ');

(function(){
    function Planet(name) {
        this.name = name;
        this.getName = function() {
            return 'Planet name is ' + (this.name) + '.';
        }
    };
    function PlanetWithSatellite(name, satelliteName) {
        Planet.call(this, name);
        this.satelliteName = satelliteName;
        const origin = this.getName;
        this.getName = function() {
            origin.call(this);
            return origin.call(this) + ' The satellite is ' + (this.satelliteName);
        }
    };

    const earth = new PlanetWithSatellite('earth', 'moon');
    console.log(earth.getName());
}());

console.log('2. Создайте класс "Здание". Создать его наследников, "Жилой дом" и "Торговый центр". ');
(function(){
    function Building(name, floors) {
        this.name = name;
        this.floors = floors;
        this.getFloors = function() {
            return this.floors;
        };
        this.setFloors = function(string) {
            this.floors = string;
        };
    }
    function House(name, floors, flatsPerFloor) {
        Building.call(this, name, floors);
        this.flatsPerFloor = flatsPerFloor;

        const levels = this.getFloors;
        this.getFloors = function() {
            return {
                name: this.name,
                floors: levels.call(this),
                flats: levels.call(this) * this.flatsPerFloor
            }
        };
    }

    function Mart(name, floors, shopsPerFloor) {
        Building.call(this, name, floors);
        this.shopsPerFloor = shopsPerFloor;

        const stages = this.getFloors;
        this.getFloors = function() {
            return {
                name: this.name,
                floors: stages.call(this),
                shops: stages.call(this) * this.shopsPerFloor
            }
        };
    }

    const home = new House('жилкомплекс "Покровские Липки"', 15, 6);
    console.log(home.getFloors());

    const shoppingmall = new Mart('ТЦ "Адмирал"', 5, 22);
    console.log(shoppingmall.getFloors());
}());