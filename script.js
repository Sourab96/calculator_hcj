function bclick(val){
    document.getElementById("ty").value+=val;
}

function clearscreen(){
    document.getElementById("ty").value = ""
}

function eclick(){
    var txt=document.getElementById("ty").value;
    var result= eval(txt)
    document.getElementById("ty").value=result
}