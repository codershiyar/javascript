//  method           parameters   
// ------------------------------
class App{
    constructor(){
       this.setItem("CODER SHIYAR","انا مهندس معلوميات , احب تعليم برمجة للأخرين"); 
       this.setItem("CODER TEST","انا مهندس معلوميات , احب تعليم برمجة للأخرين"); 
       this.setItem("CODER TEST2","انا مهندس معلوميات , احب تعليم برمجة للأخرين"); 
        this.getLanguage("English");
    }
    setItem(title,text){
        var article1 = document.getElementById("article1");
        article1.innerHTML += "<h1> " + title + "</h1>";
        article1.innerHTML += "<p>" + text + "</p>";
    }

    getLanguage(language){
        if(language == "Arabic"){
            alert("قمت بتحديد : " + language);
        }
        if(language === "English"){
        alert("موقعنا لا يدعم لغة الإنجليزية");
        }
        
    }
}
onload = new App();