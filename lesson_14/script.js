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