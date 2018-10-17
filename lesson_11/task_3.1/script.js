console.log('Задачи на стр.11');

(function(){


  console.log('1. Найти параграф и вывести его содержимое (текст).');
  let p = document.querySelector('p');
  console.log(p.innerText);


  console.log('2.  Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию ' +
    '(в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).');

  function getNodeInfo(node) {
    return {
      nodeName: node.nodeName,
      nodeType: node.nodeType,
      childNodes: node.childNodes.length,
      parentNode: node.parentNode
    }
  }

  const htmlElement = document.querySelector('ul');
  console.log(getNodeInfo(htmlElement));

  console.log('3. Получить массив, который содержит тексты ссылок списка.');
  function getTextFromUl(ul) {
    if (ul.toLowerCase() != 'ul') {
      return "Селектор загружен неправильно";
    }
    else {
      const ulElement = document.querySelector(ul);
      const list = ulElement.children;
      const titles = [];

      for (let i = 0; i < list.length; i++) {
        titles.push(list[i].innerText);
      }

      return titles;
    }
  }
  console.log(getTextFromUl('ul'));

  console.log('4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). ' +
    'Конечный результат: -text-<a href=&quot;#&quot;>reprehendunt</a>-text-<mark>nemore</mark>-text-');

  const paragraph = document.querySelector('p');
  const nodes =  paragraph.childNodes;

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeType === 3) {
      nodes[i].textContent = '-text-';
    }
  }
  console.log(paragraph);

}());

