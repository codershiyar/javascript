// method   - وظيفة | مهمة | طريقة
// return   - إعادة | إسترجاع
// ---------------------------------------
// method return  وظيفة الذي يعيد قيمة  
// ---------------------------------------

class App{
    constructor(){
        var message = this.getMessage();
        document.getElementById("title").innerHTML = this.getMessage();
    }

    getMessage(){
        
        return "Hi ! مرحبا"
    }
}

onload = new App();