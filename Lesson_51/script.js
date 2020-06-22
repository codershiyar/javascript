class Translate{
    constructor(){

      document.getElementById("arabic").addEventListener("click",()=>{
        this.translate("arabic");
      });  
      document.getElementById("english").addEventListener("click",()=>{
        this.translate("english");
      });  
      this.translate(localStorage.getItem("Language"));
    }
    translate(language){
        if(language == "arabic"){
            document.getElementById("title").innerHTML = "مبرمج شيار";
            document.getElementById("p").innerHTML = "تعلم جافا سكريبت";
        }
        else if(language == "english"){
            document.getElementById("title").innerHTML ="Coder Shiyar";
            document.getElementById("p").innerHTML ="Learn JavaScript";
        }
        localStorage.setItem("Language",language);
    }
}
onload = new Translate();
