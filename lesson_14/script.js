console.log('Домашняя работа N14. Работа с формами. ');
console.log('Задачи на стр 9-11.');

(function() {

  console.log('1. Создать форму для добавления юзера в базу данных (пока без базы данных:-)).  ' +
    'Должны быть следующие поля: имя, фамилия, возраст, электронный адрес.  При сабмите формы нужно валидировать все поля: ' +
    '- имя и фамилия - без пробелов, с большой буквы, как минимум две буквы в слове; ' +
    '- возраст - только положительное число, пусть будет от 18 до 100; ' +
    '- электронный адрес - в формате name@xxx.com. ' +
    'Невалидное поле должно подсвечиваться красным. Внизу формы показать красным цветом сообщение о невалидности полей, ' +
    'перечислить эти поля (например, “Неправильно заполнены имя, возраст”).');

  const form = document.querySelector('form#valid');
  const inputs = form.querySelectorAll('input[type="text"]');
  const text = form.querySelector('.before-submit');
  const firstName = form.querySelector('input[name="firstname"]');
  const secondName = form.querySelector('input[name="secondname"]');
  const ageName = form.querySelector('input[name="age"]');
  const emailName = form.querySelector('input[name="email"]');

  const checkTextField = /^([А-Я]+[а-я]{2,})$/;
  const checkEmailField = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;



  form.addEventListener('submit', function(event) {
    let i, value, name, input,
      max = inputs.length,
      formNonValid = 0,
      errors = 'Неправильно заполнены:<ul>';


      let firstname = firstName.value;
      const validFirstName = checkTextField.test(firstname);
      if (validFirstName) {
        firstName.style.borderColor = '';
        formNonValid++;
      } else {
        errors += ('<li>' + firstName.name + '</li>');
        firstName.style.borderColor = 'red';
      }

      let secondname = secondName.value;
      const validSecondName = checkTextField.test(secondname);
      if (validSecondName) {
        secondName.style.borderColor = '';
        formNonValid++;
      } else {
        errors += ('<li>' + secondName.name + '</li>');
        secondName.style.borderColor = 'red';
      }

      let age = ageName.value;
      if (age > 18 && age < 100) {
        ageName.style.borderColor = '';
        formNonValid++;
      } else {
        errors += ('<li>' + ageName.name + '</li>');
        ageName.style.borderColor = 'red';
      }

      let email = emailName.value;
      const validEmail = checkEmailField.test(email);
      if (validEmail) {
        emailName.style.borderColor = '';
        formNonValid++;
      } else {
        errors += ('<li>' + emailName.name + '</li>');
        emailName.style.borderColor = 'red';
      }

    errors += '</ul>';
    if (formNonValid < 4) {
      event.preventDefault();
      text.innerHTML = errors;
    } else {
      alert('Уважаемый ' + firstname + ' ' + secondname + '. Спасибо за регистрацию.')
    }

    console.log(errors);
  });

}());
//
(function(){

  console.log('2. Дан массив  [ {“лето”: “одень футболку и шорты”}, {“осень”: “одень куртку и штаны”}, ' +
    '{“зима”: “одень шубу и теплые штаны”}, {“весна”: “одень ветровку и джинсы”} ]. ' +
    'Сделать форму с select, в которой option будут соответствовать временам года из массива. ' +
    'При выборе определенного option  установить в input type=text  соответствуюящую времени года строку.');

  const data = [
    {'лето': 'одень футболку и шорты'},
    {'осень': 'одень куртку и штаны'},
    {'зима': 'одень шубу и теплые штаны'},
    {'весна': 'одень ветровку и джинсы'}
  ];

  const body = document.querySelector('body');
  const form = document.createElement('form');
  body.appendChild(form);
  form.setAttribute('id','form1');
  const select = document.createElement('select');
  form.appendChild(select);
  select.setAttribute('name','season');
  const input = document.createElement('input');
  form.appendChild(input);

  const disabled = document.createElement('option');
  select.appendChild(disabled);
  disabled.outerHTML = '<option disabled selected>Выберите сезон</option>';

  data.forEach((season) => {

      const option = document.createElement('option');
      option.innerText = Object.keys(season)[0];
      select.appendChild(option);

  })

    select.onchange = function(event) {
     const value = event.target.value;
      const season = data.find(function(item) {
        return item[value];
      })
      input.value = season[value];
    }

}());