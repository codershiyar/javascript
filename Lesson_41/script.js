//  Coder Shiyar :) => http://youtube.com/codershiyar
// ---------------------------------------------------
class App{
    constructor(){

    }
    sayHallo(){
        alert("مرحبا بك");
    }

}

onload = new App();


document.getElementById("button1").addEventListener("click" ,()=>{
    let app = new App();
    app.sayHallo();
});
