class MyPage{

    constructor(){
        var text = document.getElementById("text");
    
        text.addEventListener("copy",()=>{
        this.copy();    
        });

       var input = document.getElementById("input");
       input.addEventListener("paste",()=>{
        this.paste();
       }) ;

       input.addEventListener("cut",()=>{
        this.cut();
       });

    }

    copy(){
        alert("تم نسخ النص");
    }

    paste(){
        alert("تم لصق النص");
    }

    cut(){
        alert("تم قص النص");
    }
}

onload = new MyPage();


function copy(){
    alert("تم نسخ النص");
}

function paste(){
    alert("تم لصق النص");
}

function cut(){
    alert("تم قص النص");
}

// oncopy  = copy    عند نسخ
// onpaste = paste     عند لصق
// oncut   = cut       عند قص