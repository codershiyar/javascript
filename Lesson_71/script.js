class MyPage{

    constructor(){

    }

}

onload = new MyPage();


//  setTimeout 
//  يتم إستخدامها لتاخير تنفيذ الأوامر الذي تقوم بتحديدها
//  حسب المدة الذي تحددها 

// clearTimeout 
// يتم استخدامها لأجل حذف المؤقت 
// setTimeout
// مثال

function myFunction(){
    alert("تم استدعاء الأوامر")
}
// هنا قمنا بإنشاء متغير وتخزين ضمنها العنصر مؤقت لتنفيذ اوامر 
// و طلبنا بإستدعاء فونكشن بعد 
// 3
// ثواني لان 
// كل 1000 
// يكون 1 ثاني
// يمكنك تحديد بنفسك المدة
var mySetTimeOut = setTimeout(myFunction, 3000 );


// هنا قلنا عند يتم استدعاء فونكشن نرغب بإلغاء المؤقت 
// المخزن ضمن المتغير الذي يسمى
// mySetTimeOut


function clearTimeout(){
    clearTimeout(mySetTimeOut);
}