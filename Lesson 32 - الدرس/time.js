function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML =date.getDate()+"-"+parseInt(date.getMonth()+1)  
}
