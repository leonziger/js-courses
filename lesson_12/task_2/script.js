(function(){

  console.log('1. Вывести в консоль цвет фона элемента mark.');
  const markElement = document.querySelector('mark');
  console.log('цвет фона элемента mark: ', getComputedStyle(markElement).backgroundColor);

  console.log('');
  console.log('2. С помощью JS поменять у элемента mark бэкграунд на синий цвет.');
  markElement.style.backgroundColor = 'blue';
  console.log('цвет фона элемента mark стал таким: ', getComputedStyle(markElement).backgroundColor);

  console.log('');
  console.log('3. Узнать цвет текста первой ссылки в документе.');
  const firtLinkOfDocument = document.querySelector('a');
  console.log('цвет первой ссылки: ', getComputedStyle(firtLinkOfDocument).color);

  console.log('');
  console.log('4. Узнать размер шрифта и семейство шрифта, которые применены к параграфу.');
  const pElement = document.querySelector('p');
  console.log('размер шифтра у параграфа: ', getComputedStyle(pElement).fontSize);
  console.log('семейство шифтра у параграфа: ', getComputedStyle(pElement).fontFamily);

  console.log('');
  console.log('5. Сделать все ссылки внутри списка ul красного цвета (цвет текста).');
  let aList = document.querySelectorAll('li a');
  console.log(aList);
  for(let i = 0; i < aList.length; i++) {
    aList[i].style.color = 'red';
  }

  console.log('');
  console.log('6. “Спрятать” ссылку, стоящую после списка ul');
  document.querySelector('span+a').style.display = 'none';

  }());

