// JavaScript OOP  = object oriented programming
// class            -             فئة 
// constructor      -           البناء 
// object           -            كائن 
// ------------------------------------
// method           -   طريقة - وظيفة
// this  يتم استخدامها لإخبار جافاسكربت بإنك ترغب بتحديد عنصر موجود ضمن ذلك الكلاس

class App{
    constructor(){
        
    //   this.change_background();  
    }
    change_background(){
       document.getElementById("body").style.background = "red";
    }

}

var app_object = new App();
// app_object.change_background();

function change_background2(){
    document.getElementById("body").style.background = "red";
}

// change_background2();






