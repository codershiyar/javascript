// submit();  (يتم استخدامها لعمل سوبميت ل فورم(مثل النقر على زر من نوع سوبميت
// (يتم استخدامها لإعادة تعيين قيم جميع العناصر في نموذج (مثل النقر على زر إعادة الضبط
// reset();  

// focus();     يتم استخدامها لإضافة تركيز إلى عناصر الذي يمكنك اضافة تركيز لها
// blur();                  يتم استخدامها للحذف التركيز من عنصر مضاف اليه تركيز 

//---------------------------------------------------
// Coder Shiyar - YouTube : http://youtube.com/codershiyar
//---------------------------------------------------




document.getElementById("focus_oninput").addEventListener("click",()=>{
    document.getElementById("email").focus();
});

document.getElementById("blur_oninput").addEventListener("click",()=>{
    document.getElementById("email").blur();
});

document.getElementById("submit_form").addEventListener("click",()=>{

    document.getElementById("login_form").submit();
});


document.getElementById("reset_form").addEventListener("click" ,()=>{
   document.getElementById("login_form").reset();
});























