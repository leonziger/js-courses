(function(){
  console.log('Домашняя работа N13. ');
  console.log('Стили, размеры и позиция. Упражнения на стр. 20 - 21');

  console.log('1. Вывести в консоль высоту списка ul (с учетом паддингов и без них).');
  let element = document.querySelector('ul');
  console.log('Поскольку у списка ul нет паддингов, то подойдет любой метод: offsetHeight, clientHeight. getComputedStyle подтвердит это.');
  console.log(element.offsetHeight);
  console.log(element.clientHeight);
  console.log(parseInt(getComputedStyle(element).height));

  console.log('');
  console.log('2. Узнать положение элемента mark (верхнюю левую точку).');
  element = document.querySelector('mark');
  console.log('координата левой верхней точки: слева - ' + element.getBoundingClientRect().left +
    ', сверху - ' + element.getBoundingClientRect().top);

  console.log('');
  console.log('3. Узнать, в каких координатах находится нижняя правая точка mark.');
  console.log('координата правой нижней точки: справа - ' + element.getBoundingClientRect().right +
    ', сверху - ' + element.getBoundingClientRect().bottom);

  console.log('');
  console.log('4. Узнать расстояние между первой и второй li в списке ul.  ');
  element = document.querySelectorAll('ul li');
  console.log(element);
  const li1 = element[0];
  const li2 = element[1];

  console.log(element[1].offsetLeft + ' px');
  console.log(element[1].offsetTop + ' px');
  console.log(element[0].offsetLeft + ' px');
  console.log(element[0].offsetTop + ' px');
  console.log('расстояние по ширине между первой и второй li равно ' + (element[1].offsetLeft - element[0].offsetLeft) + ' px');
  console.log('расстояние по высоте между первой и второй li равно ' + (element[1].offsetTop - element[0].offsetTop) + ' px');


}());