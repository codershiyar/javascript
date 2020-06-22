// Coder Shiyar   -   https://youtube.com/codershiyar
// ----------------------------------------------------
// document.title   يتم استخدامها للحصول على عنوان الصفحة او تعديل على عنوان الصفحة  
// document.head                            يتم استخدامها لتحديد راس الصفحة لتحكم بها 
// document.body                            يتم استخدامها لتحديد جسم الصفحة لتحكم بها
// ----------------------------------------------------
let title = document.title;
document.title = "كودر شيار";
document.head.innerHTML += "<style> body{background:red;}</style>";

document.body.onload = ()=>{
alert("تم اكتمال تحميل الصفحة");
};