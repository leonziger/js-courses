console.log('Домашняя работа N1');

const pi = Math.PI.toFixed(2);
console.log(pi);

const min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(min);

let a = Math.random().toFixed(2);
let x = 10;
let b = Math.round(Math.random()*x);
console.log(a,b);

let amount = (0.6 + 0.7).toFixed(1);
console.log(amount);

let str = '100$';
let resoult = parseInt(str);
console.log(resoult);


//2

let obj = {
  product: 'iphone',
}

obj.price = 1000;
obj['currency'] = 'dollar';

obj.details = {
  model: 'iphone 12z',
  color: '#FFF'
}

console.log(obj)

//3
//a += 10, b *= 18, c -= 10;
//x += a, y *= z, i *= 5 * y;

//let z = 3;
//z *= z;


//4
let someVar = 'hidden';
if (someVar == 'hidden') someVar = 'visible';
else someVar = 'hidden';
someVar == 'hidden' ? someVar = 'visible' : someVar = 'hidden';

let petro = 0;

// if (petro === 0) petro = 1;
//   else if (petro < 0) petro = 'less then zero';
//     else petro *= 10;

petro === 0 ? petro = 1 : petro < 0 ? petro = 'less then zero' : petro *=10;

console.log(petro)

//5 
let aLink = 'sumatra';
switch (aLink){
  case 'block':
  console.log('block')
  break;
  case 'none':
  console.log('none')
  break;
  case 'inline':
  console.log('inline')
  break;
  default:
  console.log('other');
}
console.log(a)