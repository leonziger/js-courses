function Node(element) {
  this.element = element;
  this.events = {};
  this.getElement = function() {
    return this.element;
  };
  this.html = function(value) {
    if(!value) {
      return this.element.innerHTML;
    } else {
      this.element.innerHTML = value;
    }
  };
  this.append = function(html) {
    this.element.append(html);
  };
  this.prepend = function(html) {
    this.element.prepend(html);
  };
  this.after = function(html) {
    this.element.after(html);
  };
  this.before = function(html) {
    this.element.before(html);
  };
  this.innerHeight = function(html) {
    return parseInt(getComputedStyle(this.element).height);
  }
  this.height = function(html) {
    return this.element.clientHeight;
  }
  this.outherHeight = function(html) {
    return this.element.offsetHeight;
  }
  this.innerWidth = function(html) {
    return parseInt(getComputedStyle(this.element).width);
  }
  this.width = function(html) {
    return this.element.clientWidth;
  }
  this.outherWidth = function(html) {
    return this.element.offsetWidth;
  }
  this.style = function(html, property, value) {
    if (!value) {
      return getComputedStyle(this.element).getPropertyValue(property);
    } else {
      this.element.style.setProperty(property,value);
    }
  }
  this.getPosition = function(html) {
    return {
      left: this.element.getBoundingClientRect().left,
      top: this.element.getBoundingClientRect().top
    }
  }
  this.backToTop = function() {
    window.scrollTo(0, 0); // - метод backToTop() должен проскроллить страницу к её началу.
  }



  //this.event = function(eventName , callback) {
  //  if(!callback) {
  //    console.log(this.element);
  //    const event = this.events[eventName];
  //
  //    if (event) {
  //      event()
  //    }
  //    //this.element[eventName]();
  //  } else {
  //    console.log(this.events);
  //    this.events[eventName] = callback;
  //    console.log(this.events);
  //  }
  //}

}

const elem = document.querySelector('p');
const uzel = new Node(elem);
console.log(uzel.innerHeight());
console.log(uzel.height());
console.log(uzel.outherHeight());
console.log(uzel.innerWidth());
console.log(uzel.width());
console.log(uzel.outherWidth());
console.log(uzel.style(elem, 'color'));
uzel.style(elem,'color','red');
console.log(uzel.style(elem, 'color'));
console.log(uzel.getPosition(elem));
uzel.backToTop();

// 5. В nodes.js дополнить модуль nodes следующими методами:
// - event(eventName [, callback]) - если передан один аргумент (имя события),
// вызвать это событие; если передан и второй аргумент, добавить на событие eventName слушатель callback



// 3. В nodes.js дополнить модуль nodes статическим методом validateForm, который примет первым аргументом форму,
// а вторым - массив объектов вида  {inputName: testString} где inputName - имя поля, которое надо валидировать в форме,
// а testString - одно из строковых значений:
// - “text” - для этого значения поле должно содержать только буквы английского или русского алфавита;
// - “digits” - только цифры; - “textDigits” - цифры и/или текст.
// Например: nodes.validateForm(form1, [{name: ‘text’}, {age: ‘digits’}]) должен при сабмите формы проверить инпуты с именами name и age на наличие текста и числа.
// Невалидные поля подсветить красным.  В форме показать сообщение о невалидности (сообщение добавлять средствами javascript в конец формы).