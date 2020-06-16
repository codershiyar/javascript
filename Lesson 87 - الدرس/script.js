// methods of classList             -           وظيفة
// --------------------------------------------------------------------------------------
// add(class1, class2, ...)	                         لإضافة كلاس او اكثر إلى عنصر المحدد          
// contains(class)	        لتحقق إن كان الكلاس الذي تحدده يتواجد في عنصر المحدد او لا
// remove(class1, class2, ...)	               لحذف كلاس او اكثر من كلاس من عنصر المحدد
// item(index)	                       لمعرفة أسم كلاس الذي يتواجد في تمركز الذي تحدده
// length                               لمعرفة عدد اسماء كلاسات متواجد ضمن عنصر المحدد
// --------------------------------------------------------------------------------------

// document.getElementById("content").classList.add("text","text2");

// var isContains = document.getElementById("content").classList.contains("div3");
// alert(isContains);

// document.getElementById("content").classList.remove("div2","div3");

// alert(document.getElementById("content").classList.item(3));

// alert(document.getElementById("content").classList.length);

// document.getElementById("content").classList.add("text");

document.getElementById("button1").onclick = ()=>{
document.getElementById("content").classList.remove("text");
};