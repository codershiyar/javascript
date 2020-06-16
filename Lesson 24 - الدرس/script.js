// localStorage.setItem("key", "value");                 لإضافة بيانات جديدة او تحديثها
// localStorage.getItem("key");                 لإسترداد بيانات من ذاكرة تخزين المحلية
// localStorage.removeItem("key");             لحذف احد بيانات من ذاكرة تخزين المحلية       
// localStorage.clear();          لحذف جميع البيانات المخزنة ضمن ذاكرة تخزين المحلية


if(localStorage.getItem("Name")==null){
var setName = prompt("ضع اسمك");
localStorage.setItem("Name",setName);
}

function removeItem(){
    localStorage.removeItem("Name");
}

document.getElementById("getName").innerHTML = "اهلا بك " + localStorage.getItem("Name");



