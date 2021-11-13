// ---------------------------------------------------------------
// setInterval  - يستخدم لضبط تكرار تنفيذ اوامر الذي تحدده 
// ---------------------------------------------------------------
// clearInterval - يستخدم لإيقاف تكرار تنفيذ اوامر

// function runApp(){
//    alert("تم تنفيذ اوامر")
// }
// setInterval(runApp,3*1000)


//  setInterval(function(){
//     alert("تم تنفيذ اوامر")
//  },3*1000)
var myInterval;
var counter = 0;
document.getElementById("setInterval").onclick = ()=>{
    myInterval = setInterval(()=>{
        counter = counter + 1;
      document.getElementById("counter").innerText = counter;
      if(counter == 10){
        clearInterval(myInterval)
        alert("اكتمل ")
      }
     },1*1000)
}

document.getElementById("removeInterval").onclick = ()=>{
    clearInterval(myInterval)
}



 