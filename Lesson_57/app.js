
//  event        -     addEventListener
//---------------------------------------------
//  oninvalid    -     invalid  تنفيذ أوامر عند يتم نقر على زر سوبميت ويحدث خطا بفورم 
//  oninput      -     input     لتنفيذ الأوامر عندما يقوم المستخدم بضغط على حقل المحدد لكتابة شي ضمنها

// --------------------------------------------

// input  = حقل | مدخل

// setCustomValidity()                                 لإعادة تعيين رسالة الخطأ الأفتراضية 
// validationMessage                   للحصول على رسالة الخطأ عند حدوث خطا ضمن احد حقول
// validity.typeMismatch   لتحقق إن كان نوع البيانات الذي إدخاله مستخدم صالحة او لا
// validity.valueMissing                    للتحقق إن كان حقل المحدد يفقد للبيانات او لا 


let email_input = document.getElementById("email");
email_input.addEventListener("invalid", ()=>{ input_error();});


email_input.addEventListener("input", ()=>{  input_error();});

function input_error(){
    if(email_input.validity.valueMissing){
        email_input.setCustomValidity("لم تقم بوضع بيانات ضمن هذا الحقل");
    }else if(email_input.validity.typeMismatch){
        email_input.setCustomValidity("بيانات غير صالحة");
    }else{
        email_input.setCustomValidity("");
        return true;
    }  
document.getElementById("error_message").innerText = email_input.validationMessage;
}














//  onchange     -     change    لتنفيذ الاوامر عند حدوث اي تغيرات على العنصر المحدد عندما يفقد 
//                               select    العنصر محدد التركيز وايضا يستخدم مع عنصر 
                        