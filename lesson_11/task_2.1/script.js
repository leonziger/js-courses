console.log('Домашняя работа N11. Доступ к DOM. Задачи на стр.15');
console.log('Получить в консоль:');



(function(){
  console.log('1. head', document.head);
  console.log('2. body', document.body);

  document.addEventListener('DOMContentLoaded', function() {
    let
      elements = document.body.children,
      element = elements[0];

    console.log('3. все дочерние элементы body:');
    while (element) {
      console.log(element);
      element = element.nextElementSibling;
    }

    let divs = document.getElementsByTagName('div'),
      div1 = divs[0];
    console.log('4. первый div и все его дочерние узлы:', div1, div1.childNodes);
    let nodes = div1.childNodes,
      node = nodes[0],
      arrNodes = [];

    console.log('4а. все его дочерние узлы в консоль:');
    while (node) {
      console.log(node);
      arrNodes.push(node);
      node = node.nextSibling;
    }

    console.log('4b. все его дочерние узлы в консоль, кроме первого и последнего:');
    for (let i=1; i < arrNodes.length-1; i++) {
      console.log(arrNodes[i]);
    }
  });
}())
