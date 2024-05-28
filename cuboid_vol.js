function areacal(){
    var l=document.getElementById("len").value;
    var b=document.getElementById("wid").value;
    var h=document.getElementById("hgh").value;
    var p=document.getElementById("area")
    if(l=="" && b=="" && h=="")
        alert('enter valid length ,breadth and height')
    else if(l=="" && b=="")
        alert('enter valid length and breadth')
    else if(b=="" && h=="")
        alert('enter valid breadth and height')
    else if(l=="" && h=="")
        alert('enter valid length and height')
    else if(b=="")
        alert('enter valid breadth')
    else if( h=="")
        alert('enter valid height')
    else if(l=="")
        alert('enter valid length')
    else{
        var x=2*((l*b)+(b*h)+(h*l));
        p.textContent=`the surface area of cuboid is ${x}`;
    }
    
}