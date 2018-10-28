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
  };
  this.height = function(html) {
    return this.element.clientHeight;
  };
  this.outherHeight = function(html) {
    return this.element.offsetHeight;
  };
  this.innerWidth = function(html) {
    return parseInt(getComputedStyle(this.element).width);
  };
  this.width = function(html) {
    return this.element.clientWidth;
  };
  this.outherWidth = function(html) {
    return this.element.offsetWidth;
  };
  this.style = function(html, property, value) {
    if (!value) {
      return getComputedStyle(this.element).getPropertyValue(property);
    } else {
      this.element.style.setProperty(property,value);
    }
  };
  this.getPosition = function(html) {
    return {
      left: this.element.getBoundingClientRect().left,
      top: this.element.getBoundingClientRect().top
    }
  };
  this.backToTop = function() {
    window.scrollTo(0, 0); // - метод backToTop() должен проскроллить страницу к её началу.
  };
  this.validateForm = function(form, fields) {
    const hasErrors = form.querySelector('.errors');
    if (hasErrors) {
      hasErrors.remove();
    }

    const errorList = document.createElement('ul');
    errorList.classList.add('errors');
    const validateTypes = {
      text: /[a-zа-яёA-ZА-ЯЁ]/,
      digits: /\d/,
      textDigits: /[a-zа-яё0-9]+/
    };

    fields.forEach(function(item) {
      const fieldName = Object.keys(item)[0];
      const type = item[fieldName];
      const field = form.querySelector('[name="' + fieldName + '"]');
      const isFieldValid = validateTypes[type].test(field.value);
      if (!isFieldValid) {
        field.classList.add('error');
        const li = document.createElement('li');
        li.textContent = 'Поле ' + fieldName + ' должно быть типа ' + type;
        errorList.append(li);
      } else {
        field.classList.remove('error');
      }
    });
    form.append(errorList);

  };

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

const form1 = document.querySelector('#valid');
const uzel = new Node();


form1.addEventListener('submit', function(event) {
  event.preventDefault();
  uzel.validateForm(form1,[{firstname: 'text'}, {secondname: 'text'}, {age: 'digits'}, {login: 'textDigits'}]);

});



// 5. В nodes.js дополнить модуль nodes следующими методами:
// - event(eventName [, callback]) - если передан один аргумент (имя события),
// вызвать это событие; если передан и второй аргумент, добавить на событие eventName слушатель callback

