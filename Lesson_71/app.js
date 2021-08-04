function run_app(){
    alert("Hi")
}

var timeout ;
document.getElementById("settimeout").onclick = ()=>{
    timeout =  setTimeout( run_app , 3000)
}

document.getElementById("cleartimeout").onclick = ()=>{
    clearTimeout(timeout)
}