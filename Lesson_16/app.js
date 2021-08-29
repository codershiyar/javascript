// JavaScript Array - مصفوفات في جافا سكريبت
// -------------------------------------------------------------
// يتم استخدامها لتخزين مجموعة من بيانات
// -------------------------------------------------------------
// length لمعرفة عدد بيانات المخزنة ضمن مصفوفة الذي تحدده يبدا من 1 بدل 0
// -----------------------------------------------------------------
//  forEach() يتم استخدامها لتسهيل عرض البيانات ضمن  ارراي
//  ----------------------------------------------------------------
//  Array.isArray() يستخدم لتحقق من بيانات ان كان ارراي او لا
//  ----------------------------------------------------------------
// var data = ["Coder Shiyar",21,"JavaScript",["English","Arabic"]]
// data[2] = "JavaScript"
// data.splice(1,1)
// delete data[1]

// console.log(Array.isArray(data[2]) )
// console.log(data[data.length - 4])
// console.log(data[3][0])
var count = 0;
var languages = ["Arabic","Kurdish","English","Dutch","German" ,"Afghan"]

languages.forEach(language =>{
    document.getElementById("list").innerHTML += `<li> ${language}</li>`
})
// data.forEach(item =>{
//     count++ 
//     console.log(count + " : ")
//     console.log(item)
// })


