console.log('Домашняя работа N8. ');
console.log('ООП. Задачи на стр.41');
console.log('1. Создать класс Мебель (свойства имя, цена и метод получитьИнфо). Метод обьявить через прототипы.');

(function(){
    function Furniture(name, price) {
        this.name = name;
        this.price = price;
    }

    Furniture.prototype.getInfo = function() {
        return this;
    };

    function homeFurniture(name, price, hasTable) {
        Furniture.apply(this, arguments);
        this.hasTable = hasTable;

        homeFurniture.prototype = Object.create(Furniture.prototype);
        homeFurniture.prototype.constructor = homeFurniture;

        this.getInfo = function() {
            return {
                name:this.name,
                price:this.price,
                hasTable:this.hasTable
            }
        };
    };

    function officeFurniture(name, price, hasShreder) {
        Furniture.apply(this, arguments);
        this.hasShreder = hasShreder;

        officeFurniture.prototype = Object.create(Furniture.prototype);
        officeFurniture.prototype.constructor = officeFurniture;

        this.getInfo = function() {
            return {
                name:this.name,
                price:this.price,
                hasShreder:this.hasShreder
            }
        };
    };

    const table = new homeFurniture('кухонный гарнитур', 10000, 'есть');
    console.log(table.getInfo());
    const compdesk = new officeFurniture('стол компьютерный, двухтумбовый', 4000, 'нет');
    console.log(compdesk.getInfo());

}());


console.log('2. Создать класс Пользователь (свойства имя, датаРегистрации, метод получитьИнфо (вывод в виде объекта) ' +
    'обьявить прототипированиемм. Создать наследников Пользователя - классы Админ и Гость.');

(function() {
    function User(name, regdate) {
        this.name = name;
        this.regdate = regdate;
    }

    User.prototype.getInfo = function() {
        return this;
    };

    function Admin(name, regdate, root = false) {
        User.apply(this, arguments);
        const isSuperAdmin = root;
        this.getInfo = function() {
            return {
                name:this.name,
                regdate:this.regdate,
                isSuperAdmin
            }
        };
    }

  Admin.prototype = Object.create(User.prototype);
  Admin.prototype.constructor = Admin;

    function Guest(name, regdate, term = 7) {
        User.apply(this, arguments);
        const validDays = term;
        this.getInfo = function() {
            return {
                name:this.name,
                regdate:this.regdate,
                validDays
            }
        };
    }

  Guest.prototype = Object.create(User.prototype);
  Guest.prototype.constructor = Admin;

    const adm = new Admin('Василий', '20-11-2017', false);
    console.log(adm.getInfo());
    const gues = new Guest('Илларион', '27-09-2018');
    console.log(gues.getInfo());

}());

console.log('Задачи на стр 43.');
console.log('Задания на функциональное наследование');
console.log('1. Создайте наследника от General, у которого будет parent = false и появится новоё свойство child = true. ' +
    'Метод getInfo должен вернуть объект как из оригинальной функции + поле child ({test: .., parent: …, child: ...})');

(function(){
    function General() {
        this.test = true;
        this.parent = true;
        this.getInfo = function () {
            return {test: this.test, parent: this.parent};
        }
    }
    function Successor(){
        General.apply(this, arguments);
        this.parent = false;
        this.child = true;

        const origin = this.getInfo;
        this.getInfo = function(){
            let ch = origin.call(this);
            ch.child = this.child;
            return ch;
        };
    }

    const child = new Successor(true, false, true);
    console.log(child.getInfo())
}());

console.log('2. Создайте класс Мальчик, который при инициализации принимает имя. У этого класса есть свойство “хороший”=true. ' +
    'У класса так же есть метод “получить имя”, который должен вернуть строку вида:  ' +
    '“Мальчика зовут ” + имя + “. Он ” + <свойство хороший> === true ? “хороший” : “плохой”. ' +
    'Далее создайте наследника от Мальчика - ПлохойМальчик. Установите свойство “хороший” равным false. ' +
    'Метод “получить имя” должен показывать алёрт со строкой из оригинального метода и добавочным текстом с новой строки ' +
    '“Не дружите с ним”. Подсказка: для перевода на новую строку используйте символ \\n');
(function(){
    function Boy(name, quality = true) {
        this.name = name;
        this.quality = quality;
        this.getName = function(){
            return `Мальчика зовут ${this.name}. Он ${this.quality === true ? 'хороший' : 'плохой'}.`
        }
    }

    function BadBoy(name) {
        Boy.call(this, name, false);

        const origin = this.getName;

        this.getName = function() {
            return origin.call(this)+'\nНе дружите с ним!';
        }
    }

    const bb = new BadBoy('Семен');
    console.log(bb.getName());
}());

console.log('3. Создайте класс Fruit, который при инициализации принимает строковые аргументы “имя” и “цвет”. ' +
  'У класса есть один метод - “получить информацию”, который возвращает информацию о фрукте в виде строки ' +
  '“Фрукт” + имя + “цвет“ + цвет (“Фрукт - апельсин, цвет - оранжевый”). Создайте наследника от Fruit - SweetFruit. ' +
  'У него появится свойство sweetness=true.  Метод “получить информацию” должен вернуть строку “Фрукт - апельсин, цвет - оранжевый, ' +
  'сладость - true”. ' +
  'Также добавить метод “установить сладость”, который позволит установить sweetness в любое значение ' +
  '(например, sweetness = “сладкий”). ' +
  'Метод “получить информацию” должен показывать актуальное значение sweetness ' +
  '(“Фрукт - апельсин, цвет - оранжевый, сладость - сладкий”)');

(function(){
  function Fruit(name, color) {
    this.name = name;
    this.color = color;
    this.getInfo = function() {
      return "Фрукт - " + this.name + ", цвет - " + this.color;
    }
  }
  function SweetFruit(name, color, sweetness = true) {
    Fruit.call(this, name, color);
    this.sweetness = sweetness;

    const origin = this.getInfo;
    this.setInfo = function(sweetness) {
      this.sweetness = sweetness;
    }
    this.getInfo = function() {
      return origin.call(this) + ", сладость - " + this.sweetness + '.';
    }
  }

  const orange = new SweetFruit('апельсин', 'оранжевый');
  console.log(orange.getInfo());
  orange.setInfo('сладкий');
  console.log(orange.getInfo());

}());

console.log('Задания на прототипное наследование');
console.log('1. Дан класс User. Создать наследника NewUser, у которого метод setNewName будет ко всему создавать ' +
  'новое свойство this.changed = “The field ‘name’ was changed!”.');

(function(){
  function User(name, age) {
    this.name = name || 'Unknown';
    this.age = age || 0;
  }

  User.prototype.setNewName = function (name) {
    this.name = name;
  };

  function NewUser(name, age){
    User.call(this, name, age);

    NewUser.prototype.setNewName = function(name){
      User.prototype.setNewName.call(this,name);
      this.changed = `The field ‘name’ was changed!`;
    }
  }



  const man = new NewUser('Аристарх',25);
  console.log(man);
  man.setNewName('Тарас');
  console.log(man);
}());


console.log('2. Дан абстрактный класс Module. Разобраться, что он делает и как работает.  Создать наследника NewModule. ' +
  'Его setGlobalName должен делать всё то же самое, что и родительская функция, + устанавливать this.length = this.name.length.');

(function(){
  function Module(name) {
    if (typeof name !== 'string') {
      throw 'Enter a name!';
    }

    this.getName = function () {
      return name;
    };
  }

  Module.prototype.getPrettyName = function () {
    let name = this.getName();
    name = name.replace(/\s+/, '_');
    return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
  };

  Module.prototype.setGlobalName = function (prefix) {
    let name = this.getName();
    this.name = prefix ? prefix + '_' + name : name;
  };

  function NewModule(name){
    Module.call(this, name);
  }

  NewModule.prototype = Object.create(Module.prototype);
  NewModule.prototype.constructor = Module;

  NewModule.prototype.setGlobalName = function(prefix){
    Module.prototype.setGlobalName.call(this, prefix);
    this.length = this.name.length;
  }

  const nm = new NewModule('парапланерист');
  console.log(nm.getPrettyName());
  nm.setGlobalName('Префикс');
  console.log(nm);
}());
