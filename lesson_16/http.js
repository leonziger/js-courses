function http({method, url}){
    const xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.send();

    return new Promise(function(resolve, reject){

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                reject(new Error(xhr.status + ': ' + xhr.statusText));
            } else {
                resolve({
                    status: xhr.status,
                    data: JSON.parse(xhr.responseText)
                })
            }
        }
    })



}