function test(){
   console.log("تجربة")
}

var interval;

document.getElementById("startInterval").onclick =
 ()=>{
     interval = setInterval(test, 2000 )
}

document.getElementById("stopInterval").onclick =
 ()=>{
    clearInterval(interval)
}