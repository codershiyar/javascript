class Home{
    constructor(){
       
        // var button = document.getElementById("button");
        // button.addEventListener("click", () =>{
        //     this.change_background();
        // });

        document.getElementById("button").addEventListener("click", () =>{
                // this.change_background();
            });
    }

    change_background(){
        document.getElementById("body").style.background = "red";
    }

}

onload = new Home();

document.getElementById("button").addEventListener("click", function(){
    document.getElementById("body").style.background = "red";
});

// function change_background(){
// document.getElementById("body").style.background = "red";
// alert("يعمل onload")
// }

// window.onload = change_background();
// // onclick   onchange  onmouseover   onmouseout  onkeydown  onload 


// touchstart
// touchmove
// touchend

// mouseover
// mousemove
// mousedown
// mouseup
// click
// load