console.log('Задачи на стр.18-19');

(function(){

  console.log('1. Найти в коде список ul и добавить класс “list”');
  document.querySelector('ul').classList.add('list');


  console.log('2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link');
  const uli = document.querySelectorAll('ul');
  console.log('после ul: ', uli.nextElementSibling);
  // Поскольку идея использовать nextElementSibling не принесла резултата, используем следующее
  // из предыдудущиъзаданий возьмем функцию, которая возвращает родителя нашего списка ul
  function getParentNodeInfo(node) {
    return  node.parentNode;
  }
  const htmlElement = document.querySelector('ul');
  console.log(getParentNodeInfo(htmlElement));
  // Видим что ссылка после тега ul идет после тега span
  document.querySelector('span+a').setAttribute('id', 'link');


  console.log('3. На li через один (начиная с самого первого) установить класс “item”');
  const list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i+=2) {
    list[i].classList.add('item');
  }

  console.log('4. На все ссылки в примере установить класс “custom-link”');
  const links = document.querySelectorAll('a');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add('custom-link');
  }

  console.log('5. Nodes: задача с ООП');
  console.log('Создать класс для работы с узлами DOM. При инициализации принимается один аргумент - узел DOM. ' +
    'Методы конструктора (через прототип): ');

  function WorkWithDOMNodes(node) {
    this.node = node;
    this.nodeName = node.nodeName;
    this.children = node.children.length;
    this.parentNode = node.parentNode;
    this.attributes = node.attributes;
    this.textContent = node.textContent;
  }

  WorkWithDOMNodes.prototype.getInfo = function() {
    return {
      nodeName: this.nodeName,
      children: this.children,
      parentNode: this.parentNode
    }
  };

  let uzel = document.querySelector('a'),
    newUzel = new WorkWithDOMNodes(uzel);
  console.log('- вывести информацию об узле (имя тега, количество дочерних элементов, ссылка на родителя); ');
  console.log(newUzel.getInfo());

  console.log('- метод text([value]) должен вернуть текстовое содержимое узла, если ни один аргумент не передан,' +
    ' и заменить содержимое на value, если функция вызвана с аргументом. ');

  WorkWithDOMNodes.prototype.getText = function(value) {
    if (value) {
      this.textContent = value;
      return 'текстовое содержимое узла: ' + this.textContent;
    }
    else{
      return 'текстовое содержимое узла: ' + this.textContent;
    }
  }

  console.log(newUzel.getText());
  console.log(newUzel.getText('largus'));

  console.log('- метод attr(name [, value]) должен показывать значение атрибута, если передан один аргумент, ' +
    'и менять значение атрибута, если передано два аргумента;');

  WorkWithDOMNodes.prototype.attr = function(name, value) {
    if (value) {
      this.node.setAttribute(name, value);
    } else {
      return this.node.getAttribute(name);
    }
  };
  console.log(newUzel.attr('class'));
  console.log(newUzel.attr('class','new text'));
  console.log(newUzel.attr('class'));
}());

