// document.getElementsByClassName              لتحديد العناصر عبر اسم كلاس
// document.getElementsByTagName             لتحديد العناصر عبر اسم العنصر   

// var titles = document.getElementsByClassName("title");
// // titles.innerHTML += " JavaScript";

// for(var counter = 0; counter<= titles.length ; ++counter ){
// titles[counter].style.background = "red";
// titles[counter].style.color = "white";
// }


var h1_elements = Document.getElementsByTagName("p");
h1_elements[0].style.background = "blue";

for(var i = 0; i<= h1_elements.length; ++i){
h1_elements[i].style.color = "white";
h1_elements[i].style.background = "yellow";
}