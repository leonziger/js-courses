// 1. Создайте макет сайта, который при заходе на него пользователя в первый раз,
// показывает сообщение с просьбой ввести имя пользователя.  При следующем заходе (при перезагрузке) -
// пользователь видит приветственный текст на странице “Привет, ” + сохраненное ранее имя.

(function(){
    let userName = localStorage.getItem('userName');
    console.log(userName);
    if (userName && userName !== 'null') {
        alert('Привет ' + userName);
    } else {
        localStorage.userName = prompt('Ваше имя');
    }

}());

//2. Создать страницу с формой: поле для ввода имени, пароля и кнопка “войти”.
// Предположим, у нас есть юзер, у которого имя и пароль “user1” и “qwerty” соответственно.
// При вводе этих данных - скрыть форму и показать блок с сообщением “Привет, user1! Ты успешно зашёл в свой кабинет.”
// Если данные пароля и имени не совпали, показать красное сообщение (при этом форму не скрывать).
// После введения пароля пусть юзер будет иметь возможность после перезагрузки страницы не вводить пароль в течение минуты
// (куки с expires)

(function(){

    const userName = 'user1';
    const currentUserName =  getCookie('userName');
    const password = 'qwerty';
    const form = document.querySelector('form');
    const p1 = document.querySelector('p.error');
    const p2 = document.querySelector('p.cabinet');

    if (currentUserName) {
        form.style.display = 'none';
        p2.innerHTML = '<strong>Привет, ' + currentUserName + '! Ты успешно зашёл в свой кабинет. </strong>';
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const user = document.querySelector('[name="user"]').value;
        const pass = document.querySelector('[name="password"]').value;

        if (user === userName && pass === password) {
            form.style.display = 'none';
            setCookie('userName', userName, {expires: 30});
            p2.textContent = 'Привет, ' + userName + '! Ты успешно зашёл в свой кабинет. ';

        } else {
            p1.style.display = 'block';

        }
    })



}());