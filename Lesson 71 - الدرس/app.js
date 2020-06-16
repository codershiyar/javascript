//  Event           -          addEventListener     -                   تنفيذ اوامر
//----------------------------------------------------------------------------------
//  onload          -          load               -                         عند تحميل 
//  onclick         -          click              -           عند نقر - فقط زر اليسار  
//  onmouseover     -          mouseover          -       عند تمرير الماوس على العنصر
//  onmouseout      -          mouseout           - عند تمرير الماوس  بعيدا عن العنصر  
//  ondblclick        -        dbclick            -                      عند نقر مرتين 
//  onmousedown     -          mousedown                  عند نقر على اي زر من الماوس 
//----------------------------------------------------------
// List of Events - رابط موقع لإيجاد جميع طرق تنفيذ الأوامر 
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://www.w3schools.com/jsref/dom_obj_event.asp    
//----------------------------------------------------------


// طريقة استخدام طرق تنفيذ اوامر عبر addEventListener في كلاس
class App{
    constructor(){
      document.getElementById("text").addEventListener("click", ()=>{
        this.run_message();
      }) ; 
    }
    
    run_message(){
        alert("تم تنفيذ الأوامر من داخل الكلاس");
    }
}

onload = new App();




// الطريقة الأهم ل لتنفيذ اوامر عبر addEventListener

// document.getElementById("button1").addEventListener("click" , ()=>{
//    هنا الأوامر
// });


// الطريقة أخرى لتنفيذ اوامر عبر addEventListener
// document.getElementById("button1").addEventListener("click" , function(){
//     هنا الأوامر
// });

// الطريقة أخرى لتنفيذ اوامر عبر  Event
// document.getElementById("button1").onclick = ()=>{
//     alert('تم تنفيذ الأوامر');
// };
// الطريقة أخرى لتنفيذ اوامر عبر Event
// document.getElementById("button1").onclick = function(){
//     alert('تم تنفيذ الأوامر');
// };

// الطريقة أخرى لتنفيذ اوامر عبر Event
// document.getElementById("button1").onclick = run_code;

// الطريقة أخرى لتنفيذ اوامر عبر  
// onload = run_code;

// function run_code(){
//     alert('تم تنفيذ الأوامر');
// }





// Coder Shiyar - YouTube : http://youtube.com/codershiyar
// -----------------------------------------------------------

