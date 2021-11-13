// يتم استخدام فور إئتش لتسهيل عرض بيانات المخزنة ضمن 
// Objects , Arrays .
// -----------------------------------------------------
// forEach -     نوع الأول من 
// -----------------------------------------------------
// for (variable in object) {  
//   // do something
//   }
// -----------------------------------------------------
// forEach -     نوع الثاني من 
// Array.forEach(()=>{  // do something  });


var user = {name:"Coder Shiyar",password:"1234", user:"admin"};
var users = { 
    user1:{name:"Coder Shiyar",password:"1234", user:"admin"} , 
    user2:{name:"Coder Amin",password:"1234", user:"user"} , 
    user3:{name:"Coder Amir",password:"1244", user:"Admin"}
 };

var table_items = document.getElementById("table_items");

// ForEach Loop نوع الأول من 
for(var items in users){
    table_items.innerHTML += 
    "<tr>" 
    + "<td> "  + users[items].name + "</td>"
    + "<td> "  +users[items].password + "</td>"
    + "<td> "  + users[items].user +"</td>"
    "</tr>"; }

// ForEach Loop نوع الثاني من 
Object.keys(users).forEach(element=>{ });