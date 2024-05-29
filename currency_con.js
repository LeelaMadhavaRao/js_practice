var CURR_DATA = {};
var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_EdklOlJhENKwyhFlklTcCJbGqxoNOrD8qwoHPIFi&currencies=USD%2CINR%2CJPY%2CEUR%2CNZD');
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        CURR_DATA = JSON.parse(xhr.responseText).data;
        
    } else {
        console.error('Request failed with status', xhr.status);
    }
};
xhr.send();
function Convert1(){
    var in1 = Number(document.getElementById('input1').value)
    var curr1 = document.getElementById('first').value
    var curr2 = document.getElementById('second').value
    
    if(curr1 == curr2){
        document.getElementById('input2').value = in1.toFixed(4);
        return;
    }

    in2 = (in1 * (1/CURR_DATA[curr1])) * CURR_DATA[curr2];
    document.getElementById('input2').value = in2.toFixed(4);

}
function Convert2(){
    var in2 = document.getElementById('input2').value
    var curr1 = document.getElementById('first').value
    var curr2 = document.getElementById('second').value
    
    if(curr1 == curr2){
        document.getElementById('input1').value = in2.toFixed(4);
        return;
    }

    in1 = (in2 * (1/CURR_DATA[curr2])) * CURR_DATA[curr1];
    document.getElementById('input1').value = in1.toFixed(4);
}

setTimeout(()=>{
    document.getElementById("input1").addEventListener("input",Convert1)
    document.getElementById("input2").addEventListener("input", Convert2)

},300)