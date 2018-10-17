console.log('Урок 10. В консоле есть ошибки. Исправить код скриптов - ликвидировть ошибки.');


//task 1
function getAllNames(users) {
  return users.map(function (user) {
    let name = user.first_name||'';

    return {
      name,
      length: name.length // В этом месте выбивает ошибку, потому как не во всех загружаемых объектах user есть поле first_name.
      // решаем проблему вот такой конструкцией  let name = user.first_name||''  - если поля first_name нет, то name будет равно '', а значит у него будет длина (хоть и ноль). Ошибки не будет
    }
  })
}

console.log(getAllNames(users));


//task 2
function getTotalAmount(list, field) {
  let total = 0,
      index, digit;

  console.log(list.length);

  for (index = list.length; index--; ) {

    digit = list[index][field];

    if (digit == '') {
      digit = 0
    }
    else
     digit = parseInt(digit.replace(/\D+/, '0'),10);

    console.log(" =>"+list[index][field]+"<= | =>"+digit+"<=");
    total += digit;
  }
  
  return total; // Здесь выдает Nan. Причина - поле workers содержит пустую строку либо буквенно-цифровую коминацию.
  // Решение - если поле workers - то присваиваем его значение равным нулю, а буквенно-цифровые комбинации через регулярку очищаем от букв.
  // На выходе получаем total в виде числа.
}

document.write(getTotalAmount(workers, 'workers'));