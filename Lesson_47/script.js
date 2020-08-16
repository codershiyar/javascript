// 
let url = location.pathname;
let index = url.lastIndexOf("/") + 1;
let fileName = url.substring(index);

if(fileName == "home.html"){
document.body.style.background = "red";
}else if(fileName == "index.html"){
    document.body.style.background = "green";
    document.getElementById("title").innerHTML = "Coder Shiyar";
}