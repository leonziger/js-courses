(function(){

    const btn = document.querySelector('#btn');
    const list = document.querySelector('#list');
    const userModalElement =  document.querySelector('[data-modal="user-info-modal"]');
    const userModalBody = userModalElement.querySelector('.modal__body');
    const userModal =  new Modal(userModalElement);
    let users = [];

    function getUsers(){
        http({
            method: 'GET',
            url: 'users.json'
        }).then(function(response) {
            users = response.data;
            renderUsers(users);
        });

        //const xhr = new XMLHttpRequest();
        //
        //xhr.open('GET', 'users.json', true);
        //xhr.send();
        //
        //xhr.onreadystatechange = function() {
        //    if (xhr.readyState != 4) return;
        //
        //    if (xhr.status != 200) {
        //        alert(xhr.status + ': ' + xhr.statusText);
        //    } else {
        //        users = JSON.parse(xhr.responseText);

        //
        //    }
        //}

    }



    function renderUsers(users){
        list.innerHTML = '';

        users.forEach(function(user, index){
            const li = document.createElement('li');
            li.setAttribute('data-uid', index);
            li.textContent = user.name;
            list.append(li);
        })
    }

    function showUser(event) {
        const target = event.target;
        const li = target.closest('li');

        if(!li) {
            return;
        }

        const userId = li.getAttribute('data-uid');

        users.forEach(function(user, index){
            if (userId == index) {

                userModalBody.innerHTML = `${user.gender} ${user.name} work in ${user.job}`;

                userModal.openModal()
                return;
            }
        });
    }

    btn.addEventListener('click', getUsers);
    list.addEventListener('click', showUser);

}());