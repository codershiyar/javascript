// ------------------------------------------------------------------------------------------------------
// navigator.geolocation  يستخدم لتحقق إن كان متصفح وجهاز مستخدم يدعم خاصية تحديد مواقع              
// navigator.geolocation.getCurrentPosition()يستخدم لطلب صلاحية وصول إلى موقع من المستخدم
//                                            ولحصول على معلومات متعلقة بالموقع المستخدم
// ------------------------------------------------------------------------------------------------------
// navigator.geolocation.watchPosition() يستخدم للحصول على موقع مستخدم ويتم تحديث موقع بالاستمرار                                         
// ------------------------------------------------------------------------------------------------------
// navigator.geolocation.clearWatch(id); يستخدم لإيقاف تتبع مستخدم | ايقاف عرض موقع مستخدم بشكل مباشر
// ------------------------------------------------------------------------------------------------------



var liveMap; 
if(navigator.geolocation){

liveMap = navigator.geolocation.getCurrentPosition(function(position){
document.getElementById("main").innerHTML = `
<iframe height="300" src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik"></iframe>
`
console.log(position)
},

function(error){
    console.log(error)
}

)
}

document.getElementById("stopShareMap").onclick = ()=>{
    navigator.geolocation.clearWatch(liveMap)
}










// انواع اخطاء الذي يمكن ان يحدث عند محاولة حصول على عنوان 
// switch(error.code) {
//     case error.PERMISSION_DENIED:
//       error = "User denied the request for Geolocation. اذا مستخدم رفض صلاحية وصول للموقع"
//       break;
//     case error.POSITION_UNAVAILABLE:
//      error = "Location information is unavailable. معلومات موقع غير متوفرة"
//       break;
//     case error.TIMEOUT:
//       error = "The request to get user location timed out.إذا لم يتمكن من حصول على موقع مستخدم"
//       break;
//     case error.UNKNOWN_ERROR:
//       error = "An unknown error occurred. إذا حدث خطا غير معروف"
//       break;
//   }

//<iframe style="width:162%" height="250" frameborder="0" scrolling="no"
// marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=0,&;layer=mapnik"></iframe> 