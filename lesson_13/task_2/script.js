(function(){
  console.log('Домашняя работа N13. ');
  console.log('События. Упражнения на стр. 28');
  console.log('1. По нажатию на кнопку "btn-msg" должен появиться алерт с текстом кнопки.');
  const element = document.getElementById('btn-msg');
  element.onclick = function() {
    alert(element.textContent);
  }

  console.log('');
  console.log('2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, ' +
    'она становится прежнего цвета.');
  element.onmouseover = function() {
    element.style.backgroundColor = 'red';
  }
  element.onmouseout = function() {
    element.style.backgroundColor = '';
  }

  console.log('');
  console.log('3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.');
  const bodyElement = document.body;
  const tagElement = document.getElementById('tag');

  bodyElement.addEventListener('click', function(event) {
    tagElement.innerText = 'Tag: ' + event.target.nodeName;
  });

  console.log('');
  console.log('4. Создать кастомное событие, ' +
    'которое будет происходить при нажатии на кнопку "btn-generate" событие вызывается на элементе ul).  ' +
    'При этом в список ul каждый раз должен добавляться элемент li с текстом “Item ” + ' +
    'номер li (“Item 3”, “Item 4” и т.д.) Храните номер последнего добавленного item в свойстве counter вашего event ' +
    '(используйте его в качестве счетчика для item).');
  const element2 = document.getElementById('btn-generate');
  let i = document.querySelectorAll('ul li').length;

  let liElement;
  const ulElement = document.querySelector('ul');
  element2.onclick = function() {
    i++;
    liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = 'Item ' + i;
  }
}());