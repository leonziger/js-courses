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
  
  return total;
}

document.write(getTotalAmount(workers, 'workers'));
