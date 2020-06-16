// ---------------------------------------
// parameters in methods and constructor
// ---------------------------------------

class App{
    constructor(text,img){
       let content = document.getElementById("content");
       content.innerHTML = "<img src='" + img + "' />   <h1>" + text + "</h1>" ;
    }
  
}

onload = new App("Coder Shiyar","logo.png");