console.log('Домашняя работа N9. Таймеры в JavaScript');
console.log('Задачи на стр.9');
console.log('1. Напишите код, который будет выводить в консоль строку, начиная с одной буквы ' +
  'и добавляя по одному символу каждые 200 мс.');
(function(){
  function myFunc(text, time) {
    let i = 0;
    const timer = setInterval(function(){
      if(i <= text.length-1) {
        console.log(text[i]);
        i++;
      }
      else {
        console.log('The end');
        clearInterval(timer);
      }
    }, time);
  }

  myFunc('Leopold', 200);
}());

console.log(' ');
console.log('2. Создайте функцию, которая принимает строку и время в секундах. ' +
  'При вызове функция должна показать переданный текст ' +
  'через заданное количество секунд. Функция должна вернуть идентификатор таймера');
(function(){
  function myFunc(string, timer) {
    return setTimeout(() => console.log(string),timer * 1000);
  }

  console.log(myFunc('абракадабра', 3));
}());

console.log(' ');
console.log('Таймеры в JavaScript. Задачи на стр.10');
console.log('В чем разница между реализациями? Они одинаковы по продолжительности? Если нет, то почему?');
console.log('ОТВЕТ. Обе реализации одинаковы по продолжительности.');
console.log(' ');


console.log('ООП на закуску. Задача на стр.11');
console.log('Создать наследника от Element - новый класс TextElement. ');
(function(){
  function Element(content){
    this.content = content;
    this.elementType = 'html';
    this.getContent = function() {
      return this.content;
    };
    this.setContent = function(value) {
      this.content = value;
    }
  }
  function TextElement(content){
    Element.call(this, content);
    this.length = this.content.length;

    const origin = this.setContent;

    this.setContent = function(value){
      origin.call(this, value);
      this.length = value.length;
    }
  }

  const textField = new TextElement('Modus');
  console.log(textField.getContent());
  console.log(textField.length);
  textField.setContent('Nautilus');
  console.log(textField.getContent());
  console.log(textField.length);
}());

console.log(' ');
console.log('ООП и Throw. Упражнение на стр.8.');
console.log('Создайте экземпляр PhotoGallery и переопределите метод getName так, чтобы он возвращал в конце строки текст "with n images".');

(function(){
  function PhotoGallery(name, images) {
    this._name = name ||'gallery';
    if(!images) {
      throw "Вы забыли загрузить массив картинок";
    }
    else {
      this._images = images;
    }
  }

  PhotoGallery.prototype.getImageByIndex = function(index) {
    if(this._images && this._images.length) {
      return this._images[index];
    }
  }

  PhotoGallery.prototype.getName = function() {
    return "This is an amazing " + this._name + " gallery";
  }

  function NewPhotoGallery(name, images) {
    PhotoGallery.call(this, name, images);
    this._n = images.length;
  }

  NewPhotoGallery.prototype = Object.create(PhotoGallery.prototype);
  NewPhotoGallery.prototype.constructor = NewPhotoGallery;

  NewPhotoGallery.prototype.getName = function () {
    let sentence = PhotoGallery.prototype.getName.call(this);
    return `${sentence} whith ${this._n} images`;
  };


  const pics = new PhotoGallery('pictuRes', ['pic1','pic20','gal77']);
  console.log(pics.getName());
  const imgs = new NewPhotoGallery('imaGes', ['pic107','img20','gal21', 'example51']);
  console.log(imgs.getName());

  //Здесь отрабатывается исключение, когда массив картинок не загружен в функцию
  // Закоментировано, потому как прерывается выполнение отсальных скриптов
  //const imgs2 = new NewPhotoGallery('gallerie');
  //console.log(imgs2.getName());

}());

console.log(' ');
console.log('Регулярные выражения. Упражнения на стр.31-34.');
console.log('1.Найти в строке все числа, после которых есть слово "тыс" или "тысяч" и заменить их на "ХХХ".');

(function(){

  let text = "Годовой бюджет организации составляет 500 тыс долларов в год, что равняется 41,6 тысяч в месяц. " +
    "За 12й месяц наблюдался прирост в 10 тыс долларов.";

console.log(text);
console.log(text.replace(/\d{2,3}\s/g,'XXX ').replace(/\d{2,3}.{1}\d\s/g,'XXX '));
console.log('2. В строке "Машка ела кашу, Саша любит Дашуню, это дети наши" найти все слова со словосочетанием "аш".');

  let text2 = 'Машка ела кашу, Саша любит Дашуню, это дети наши';
  console.log(text2.match(/[а-яёА-ЯЁ]*аш*[а-яёА-ЯЁ]*/g));

console.log('3. Найти в строке цвет, который относится к слову background.');
  const
    str1 = 'styles="background: red; color: green;',
    str2 = 'styles="background: red; color: green;"',
    str3 = 'styles="background: #ff00ff; color: green;"',
    str4 = 'styles="background-position: fixed; color: green;"';

  let result = str1.match(/background:\s*(.*);\s.+/);
  console.log(result[1]);
  result = str2.match(/background:\s*(.*);\s.+/);
  console.log(result[1]);
  result = str3.match(/background:\s*(.*);\s.+/);
  console.log(result[1]);
  result = str4.match(/background:\s*(.*);\s.+/);
  if (str4.indexOf('background:') >= 0) {
    console.log(result[1]);
  }
  else console.log('Результата нет');

console.log('4. Проверить, чтобы телефон соответствовал заданному формату.');
  const phoneTemplate = '^\+\d{1,2}\(\d{2,3}\)\d{2}-\d{2}-\d{3}$';
  console.log(phoneTemplate);

console.log('5. Проверить, что строка содержит ФИО, разделенные пробелом. Каждое слово должно быть с большой буквы');
  const fio = 'Евграфов Аристарх Ардалеонович';
  let res = fio.match(/([А-ЯЁ][а-яё]*)\s([А-ЯЁ][а-яё]*)\s([А-ЯЁ][а-яё]*)/);
  console.log(res[1], res[2], res[3]);

console.log('6. Выделить тегом strong повторяющиеся слова');
  const stor = "This is is a big bottle";
  console.log(stor);
  console.log(stor.replace(/((\b\w+\b)\s)(?=.?\1)/,'<strong>$2</strong> '));

console.log('7. Все ссылки в тексте обернуть в тег <a href=...></a>');

  const sting = 'Sed ut perspiciatis https://site-1.ru unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem http://google.com quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro http://site.net quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore http://site magnam aliquam quaerat site.com voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat http://my.dev.dev2.site.com quo voluptas nulla pariatur?';
  console.log(sting.replace(/((http|https|ftp)\:\/\/([a-z0-9-]*\.)+(com|net|ru))\s/gmi,'<a href=\"$1\"></a> '));
}());