console.log('���� 10. � ������� ���� ������. ��������� ��� �������� - ������������ ������.');


//task 1
function getAllNames(users) {
  return users.map(function (user) {
    let name = user.first_name||'';

    return {
      name,
      length: name.length // � ���� ����� �������� ������, ������ ��� �� �� ���� ����������� �������� user ���� ���� first_name.
      // ������ �������� ��� ����� ������������  let name = user.first_name||''  - ���� ���� first_name ���, �� name ����� ����� '', � ������ � ���� ����� ����� (���� � ����). ������ �� �����
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
  
  return total; // ����� ������ Nan. ������� - ���� workers �������� ������ ������ ���� ��������-�������� ���������.
  // ������� - ���� ���� workers - �� ����������� ��� �������� ������ ����, � ��������-�������� ���������� ����� ��������� ������� �� ����.
  // �� ������ �������� total � ���� �����.
}

document.write(getTotalAmount(workers, 'workers'));