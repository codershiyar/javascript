function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML =date.getDate()+"-"+parseInt(date.getMonth()+1) + " - " + date. getFullYear();  
}

setInterval(updateDate,100);
onload = updateDate();
function getColor(){
var getColor = document.getElementById("setColor").value;
localStorage.setItem("Color",getColor);
document.getElementById("time").style.background = localStorage.getItem("Color");
document.getElementById("body").style.background =localStorage.getItem("Color");
}

function setColor(){
document.getElementById("setColor").value = localStorage.getItem("Color");
document.getElementById("time").style.background =localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");
}

setInterval(setColor,100);