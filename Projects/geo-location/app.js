// ------------------------------------------------------------------------------------------------------
// navigator.geolocation  يستخدم لتحقق إن كان متصفح وجهاز مستخدم يدعم خاصية تحديد مواقع              
// navigator.geolocation.getCurrentPosition()يستخدم لطلب صلاحية وصول إلى موقع من المستخدم
//                                            ولحصول على معلومات متعلقة بالموقع المستخدم
// ------------------------------------------------------------------------------------------------------
// navigator.geolocation.watchPosition() يستخدم للحصول على موقع مستخدم ويتم تحديث موقع بالاستمرار                                         
// ------------------------------------------------------------------------------------------------------
// navigator.geolocation.clearWatch(id); يستخدم لإيقاف تتبع مستخدم | ايقاف عرض موقع مستخدم بشكل مباشر
// ------------------------------------------------------------------------------------------------------
// https://www.openstreetmap.org/export/embed.html?bbox=,&;layer=mapnik

var isLive = false; 
var shareLocation;
var accessLocation;
document.getElementById("getLocation").onclick = ()=>{

    
   
    if(isLive === false ){
        
        shareLocation = navigator.geolocation.watchPosition(
            function(position){
                accessLocation = true
                
               document.getElementById("alert").innerHTML = `
               <div class="alert alert-success" 
                role="alert"> يتم عرض موقعك الان في خريطة بشكل مباشر </div> `
                document.getElementById("getLocation").innerHTML = "إيقاف مشاركة"
                isLive = true 
                
                document.getElementById("map").innerHTML = 
                `<iframe height="400" width="100%" src="https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik"> </iframe> `
            },
            function(error){
                switch(error.code) {
                    case error.PERMISSION_DENIED:  
                    document.getElementById("alert").innerHTML = ` <div class="alert alert-danger mt-3 mb-3"  role="alert">
                    لقد قمت برفض وصول إلى موقعك , يرجى محاولة وموافقة
                  </div> `
                    break;
    
                    case error.UNKNOWN_ERROR:
                        document.getElementById("alert").innerHTML = `<div class="alert alert-danger mt-3 mb-3" role="alert"> حدث خطا غير معروف  </div> `
    
                    break;
    
                }
            }
        )
    
    }else if(isLive === true && accessLocation === true){
        console.log("removed" + navigator.geolocation.clearWatch(shareLocation))

        document.getElementById("alert").innerHTML = `
        <div class="alert alert-success" 
         role="alert"> تم إيقاف مشاركة موقع بنجاح
         </div> `
        console.log(shareLocation)
        navigator.geolocation.clearWatch(shareLocation);
        document.getElementById("getLocation").innerHTML = "عرض موقعي"
        isLive = false 
    }


    
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