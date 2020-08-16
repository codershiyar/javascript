//   طرق أخر لتحديد عناصر اتش تي ام ال عبر جافا سكربت    
//-------------------------------------------------------------------------
// css selectors - استخدام الطرق تحديد عناصر اتش تي ام ال عبر سي اس اس
//-------------------------------------------------------------------------
//  document.querySelector()                    لتحديد عنصر واحد                
//  document.querySelectorAll()              لتحديد جميع العناصر

// var header = document.querySelector(".header-class");
// header.innerHTML = "<h1>Hi Coder Shiyar</h1>";

var myElements = document.querySelectorAll("header , main");
myElements[2].style.color = "white";

//  i  = مجرد اسم فاريابل استخدمناها لاجل العدد
// length قمنا بإستخدامها لجلب عدد عناصر الذي تم تحديدها
for(var i = 0; i<= myElements.length; ++i){
// هنا طلبنا بأن بتم تنفيذ اوامر الذي نرغب به على جميع العناصر المحددة
    myElements[i].innerHTML += "I love Coder Shiyar" ; 
    myElements[i].style.background = "red";
}