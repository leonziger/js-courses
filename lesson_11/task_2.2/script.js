console.log('Задачи на стр.23-24');

(function(){
  document.addEventListener('DOMContentLoaded', function () {
    console.log('1.Создать функцию isParent(parent, child), которая проверяет является первый элемент родителем для второго элемента?');

    const isParent = (parent, child) => {
      console.log(parent, child);
      const result = parent.contains(child);
      if (result) {
        console.log('parent contains child');
      }
      else {
        console.log('parent doesnt contain child');
      }
    };

    isParent(document.body.children[0], document.querySelector('mark'));
    isParent(document.querySelector('ul'), document.querySelector('li'));
    isParent(document.querySelector('ul'), document.querySelector('div'));


    console.log('2.Получить список всех ссылок, которые не находятся внутри списка ul.');
    let links = document.querySelectorAll('a');
    for(let i = 0; i < links.length; i++) {
      if (!links[i].closest('ul')) {
        console.log(links[i]);
      }
    }

    console.log('3.Найти элемент перед и после списка ul.');
    const ulul = document.querySelector('ul');
    console.log('перед ul: ', ulul.previousElementSibling);
    console.log('после ul: ', ulul.nextElementSibling);


    console.log('4.Получить кол-во li в списке.');
    const lili = document.querySelectorAll('li');
    console.log('В списке ' + lili.length + ' элемента.');
  });
}());

