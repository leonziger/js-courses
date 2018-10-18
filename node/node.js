function Node(element) {
  this.element = element;
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
}

