// // This is a Class in JavaScript 
// class User{  

//     constructor(){   
//         this.changeBackground();
//     }
//     //this is a methode in JavaScript

//     changeBackground(){  
//         document.getElementById("body").style.background = "red";
//     }
// }
//  // This is a JavaScript object

// // var user = new User(); 

// // user.changeBackground();

// window.onload = new User();

function car(name,model){
console.log(name,model);
}
window.onload = car("BMW","Model: 2019");

class Car{
    constructor(name,model){
        this.name = name;
        this.model = model;

        console.log(name,model);
        alert("من ضمن class");
    }
}

var car = new Car("mercedes","Model: 2019");
window.onload = car;

