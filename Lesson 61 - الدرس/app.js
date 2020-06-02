let section_iphone = document.getElementById("iphone");
            
// لجلب بيانات عن جهاز المستخدم
let user_device = navigator.userAgent.toLocaleLowerCase();

//  للتحقق من إن كان مستخدم يملك جهاز يعمل بنظام ايفون او لا
if(user_device.includes("iphone")){

    // لتاخير عرض الصندوق حسب المدة الذي تحدده بعد فتح مستخدم للموقعك
    setTimeout(()=>{
        section_iphone.style.display = "flex";
    },5*1000);

    // لكي يودي المستخدم إلى صفحة تحميل تطبيق عند نقر على الزر
    let app_downlaod = document.getElementById("app_downlaod-iphone");
    app_downlaod.addEventListener("click", ()=>{
       window.open("http://codershiyar.com/app","_blank")     
    }); 
}else{
    // لإخفاء العنصر عندما يكون مستخدم جهازه يعمل بنظام ليس بنظام ايفون
    section_iphone.style.display = "none";
}

// لإخفاء العنصر عند نقر على علامة اكس
let close_iphone = document.getElementById("close-iphone");
close_iphone.addEventListener("click", ()=>{
    section_iphone.style.display = "none";
});