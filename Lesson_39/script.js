// List of Events - رابط مواقعين ستجد به جميع افنتس
// -------------------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://www.w3schools.com/jsref/dom_obj_event.asp    
// -------------------------------------------------------------------------
// Event            -                            :يستخدم لتنفيذ الأوامر عند 
// -------------------------------------------------------------------------
// load             -             عند اكتمال تحميل موقع او للعنصر المحدد
// click            -    عندما يحدث نقر على العنصر الذي تم تزويده بالإفنت
// -------------------------------------------------------------------------

// onload = ()=>{
//         alert("تم تحميل الصفحة");
// };

// onload = function(){
//     alert("تم تحميل الصفحة");
// }

// onload = function run_codes(){
//     alert("تم تحميل الصفحة"); 
// }

// var button1 = document.getElementById("button1");
// button1.onclick = ()=>{
//     alert("تم نقر");
// }

class App{
    constructor(){
        document.getElementById("text").onclick = ()=>{
         this.run_codes();   
        };
    }

    run_codes(){
        alert("تم تشغيل الوظيفة");
    }
}

onload = new App(); 
