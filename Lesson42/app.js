// localStorage   يتم استخدامها للوصول إلى ذاكرة تخزين المحلية في المتصفح
// setItem()       يتم استخدامها لتخزين البيانات في ذاكرة التخزين المحلية
// "key"                              إنشاء اسم مفتاح لتخزين البيانات ضمنها
// "value"              القيمة - البيانات الذي ترغب بتخزينها ضمن اسم مفتاح
// -------------------------------------------------------------------------------
// localStorage.getItem("key") 
// getItem()    يتم استخدامها لإسترداد  البيانات المخزنة عبر اسم المفتاح
// "key"  اسم المفتاح الذي ترغب بإسترداد القيمة(البيانات) المخزنة ضمنها
// -------------------------------------------------------------------------------
// localStorage.removeItem("key")
// remove()         يتم استخدامها لحذف بيانات من ذاكرة التخزين المحلية
//                                                    عبر تحديد اسم مفتاح
// "key"           اسم المفتاح الذي ترغب بحذفها مع القيمة المخزنة ضمنها 
// -------------------------------------------------------------------------------
// localStorage.clear()                           يتم استخدامها لحذف جميع
//                      البيانات المخزنة في ذاكرة تخزين المحلية 
// -------------------------------------------------------------------------------
//  نقاط أخرى مهمة 
// ------------------
// يمكنك تخزين بيانات يصل إلى 5 او 10 ميغا بايت في المتصفح حسب نوع المتصفح
// يمكنك وصول إلى البيانات المخزنة في جميع صفحات الذي ينتمون إلى نفس دومين
//            حذف بيانات المخزنة ضمن ذاكرة تخزين المحلية يمكن عبر حذف متصفح 
//        او حذف بيانات عبر اوامر جافا سكريبت او حذفها بشكل يدوي من المتصفح
// البيانات الذي يتم تخزينها يتم تحويلها إلى البيانات من نوع النصي تلقائية
// -------------------------------------------------------------------------------
// You can store data up to 5 or 10 MB in the browser depending on the type of browser
// You can access the data stored in all pages belonging to the same domain
// Delete the data stored within the local storage can be via delete browser
// or delete data via javascript commands or delete it manually from the browser
// The data that is stored is converted to string datatype  








// localStorage.setItem("course","جافا سكريبت");
// localStorage.setItem("name","JavaScript");
// localStorage.removeItem("course");
// localStorage.clear();

// localStorage.setItem("number",21.10);
// let number = parseFloat(localStorage.getItem("number"))
// console.log( number + 20)

// localStorage.setItem("array" , ["Arabic","Kurdish","Dutch","English"])
// var array = localStorage.getItem("array").split(",")
// console.log(array)

// var data = {name:"Coder Shiyar",age:21};
// localStorage.setItem("data", JSON.stringify(data));
// var data = JSON.parse(localStorage.getItem("data"))
// console.log( data.name)



document.getElementById("color").onchange = function(){
    localStorage.setItem("color", document.getElementById("color").value);
    document.body.style.background = localStorage.getItem("color");
    }
    
    if(localStorage.getItem("color")!=null ){
        document.body.style.background = localStorage.getItem("color");
        document.getElementById("color").value = localStorage.getItem("color");
    }