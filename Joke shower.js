function joke(){
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://official-joke-api.appspot.com/random_joke');
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            Joke = JSON.parse(xhr.responseText)
            document.getElementById("jokes").innerHTML = Joke.setup +'<br>'+ Joke.punchline

        } else {
            console.error('Request failed with status', xhr.status);
        }
    };
    xhr.send()
}
setTimeout(()=>{
    joke();
},300);
