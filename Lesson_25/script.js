// يتم استخدام فور إئتش لتسهيل عرض بيانات المخزنة ضمن 
// Objects , Arrays .
// -----------------------------------------------------
// forEach -      نوع الأول من 
// -----------------------------------------------------
// for (variable in object) {  
//   // do something
//   }
// -----------------------------------------------------
// forEach -     نوع الثاني من 
// Array.forEach(()=>{  // do something  });
// Array.forEach(function);

var myHobbies = ["Football" , "ICT" , "Swimming" , "Singing" , "Programming"];

// document.write(myHobbies[1]);

// for(var i in myHobbies){
// console.log(myHobbies[i]);
// }

var list = document.getElementById("list");
myHobbies.forEach(items=>{
    list.innerHTML += "<li>" + items + "</li>" ;
    // console.log(items);
});