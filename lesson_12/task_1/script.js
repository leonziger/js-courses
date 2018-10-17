(function(){
  console.log('Домашняя работа N12. ');
  console.log('Манипуляция содержимым. Упражнения на стр. 11-12');
  console.log('1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:');
  console.log('<ul>');
  console.log(' <li><a href=&quot;#&quot;>Link1</a></li>');
  console.log(' …    ');
  console.log(' <li class=”new-item”>item 4</li>    ');
  console.log(' <li class=”new-item”>item 5</li> ');
  console.log('</ul>');

  let ulElement = document.querySelector('ul');
  let liElement;
  for (let i = 4; i <= 5; i++) {
    liElement = document.createElement('li');
    liElement.className = 'new-item';
    liElement.textContent = 'item ' + i;
    ulElement.appendChild(liElement);
  }
  console.log(ulElement.childNodes);

  console.log('');
  console.log('2. Создать три элемента strong и добавить их в конец ссылок, ' +
    'которые находятся внутри списка ul (в каждую ссылку один - strong)');
  let liA = document.querySelectorAll('li a');

  for (i = 0; i < liA.length; i++) {
    liA[i].innerHTML = '<strong>' + liA[i].textContent + '</strong>';
  }
  console.log(liA);

  console.log('');
  console.log('3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt ' +
    '(текст придумайте сами). В src добавьте реальный url к картинке');
  let bodyElement = document.querySelector('body');
  let imgElement = document.createElement('img');
  imgElement.alt = 'Новости Украины';
  imgElement.src = 'http://upst.fwdcdn.com/temp/holidays/6533/logo_ua.gif';

  bodyElement.insertBefore(imgElement, bodyElement.firstChild);

  console.log('');
  console.log('4. Найти на странице элемент mark, добавить в конец содержимого текст “green” ' +
    'и на элемент установить класс green');
  let markElement = document.querySelector('mark');
  markElement.classList.add('green');
  markElement.textContent += ' green';
  console.log(markElement);

  console.log('');
  console.log('5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)');
  //let liArray = document.querySelectorAll('li');
  //console.log(liArray);
  //for (i = 0; i < liArray.length; i++) {
  //  console.log(liArray[i].textContent, liArray[i].innerHTML);
  //}

  const aElements = document.querySelectorAll('a');

  let liArray = document.querySelectorAll('li');
  let liItems = [];
  for (let key = 0; key < aElements.length; key++) {
    liItems.push(liArray[key]);
  }

  liItems.sort((a, b) => {
    if (a.innerText < b.innerText) return 1;
    if (a.innerText > b.innerText) return -1;
  })

  for (let i = 0; i < liItems.length; i++) {
    let parentItem = document.querySelector('ul');
    parentItem.appendChild(liItems[i]);
  }


  console.log('');
  console.log('6. Библиотека для работы с html элементами');
  console.log('Добавить методы в nodes конструктор:');
  console.log('- метод append(html) добавляет в конец содержимого узла html;');
  console.log('- метод prepend(html) добавляет в начало содержимого;');
  console.log('- метод before(html) вставляет html перед узлом;');
  console.log('- метод after(html) вставляет html после узла;');
  console.log('- метод html([value]) должен вернуть html-содержимое узла (innerHTML), если ни один аргумент не передан, и заменить содержимое на value, если функция вызвана с аргументом;');
  console.log('- метод getElement содержит переданный узел (метод должен вернуть узел DOM, переданный при инициализации конструктора).');

  console.log('На проверку - только файл nodes.js.');
  console.log('В дальнейшем будем его использовать и для других задач.');

}());