
var deviceSystem = navigator.userAgent.toLowerCase();

// لأجل تنفيذ الأوامر على اجهزة بنظام اندرويد

if(deviceSystem.includes("android")){
alert("انا مستخدم اندوريد");
}

// لأجل تنفيذ الأوامر على اجهزة بنظام ايفون
if(deviceSystem.includes("iphone")){
    alert("انا مستخدم ايفون");
}

// لأجل تنفيذ الأوامر على اجهزة بنظام ايباد
if(deviceSystem.includes("ipad")){
    alert("انا مستخدم ايباد");
}

// لأجل تنفيذ الأوامر على اجهزة بنظام ويندوز
if(deviceSystem.includes("windows")){
    alert("انا مستخدم ويندوز");
}

