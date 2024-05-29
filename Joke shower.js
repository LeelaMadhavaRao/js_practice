function joke(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://icanhazdadjoke.com/');
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            
            console.log(JSON.parse(xhr.responseText).data)
        } else {
            console.error('Request failed with status', xhr.status);
        }
    };
}
