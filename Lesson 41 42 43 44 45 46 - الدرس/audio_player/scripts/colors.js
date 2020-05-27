class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

    this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });

    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color-1"){
            this.header.style.background ="rgb(27, 27, 27)";
            document.body.style.background = "rgb(27, 27, 27)";
        }
        else if(color == "color-2"){
            this.header.style.background ="#ff5353";
            document.body.style.background ="#ff5353";
        }

        else if(color == "color-3"){
            this.header.style.background ="#009688";
            document.body.style.background ="#009688";
        }

        else if(color == "color-4"){
            this.header.style.background = "#222a4c";
            document.body.style.background ="#222a4c";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();