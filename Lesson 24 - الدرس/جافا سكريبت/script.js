//localStorage.setItem("Key",value);
// localStorage.getItem("Key");
//localStorage.removeItem("Key");
if(localStorage.getItem("Name")==null){
var setName = prompt("ضع اسمك");
localStorage.setItem("Name",setName);
}

function removeItem(){
    localStorage.removeItem("Name");
}

document.getElementById("getName").innerHTML = "اهلا بك " + localStorage.getItem("Name");



































// document.body.clientHeight
// document.body.clientWidth
// window.innerHeight  
// window.innerWidth


// window.open() - open a new window   فتح نافذة جديدة
// window.close() - close the current window  اغلاق نافذة الحالية
// window.moveTo() - move the current window    نقل نافذة الحالية
// window.resizeTo() - resize the current window  إعادة ضبط حجم الشاشة الحالية



