// document.cookie = `course=JavaScript; max-age=${12*30*24*60*60}; path=/`
document.cookie = `course=JavaScript; expires=Sat Aug 30 2021 20:44:09 GMT+0200; path=/`
document.cookie = `name=Coder Shiyar; expires=Sat Aug 30 2021 20:44:09 GMT+0200; path=/`

document.cookie = `course=جافا سكريبت; expires=Sat Aug 30 2021 20:44:09 GMT+0200; path=/`

document.cookie = `background=#ff5454; samesite=strict; domain=codershiyar.com; max-age=${12*30*24*60*60}; path=/;`


// Cookie options:

// path=/, by default current path, makes the cookie visible only under that path.
// domain=site.com, by default a cookie is visible on the current domain only. If the domain is set explicitly, the cookie becomes visible on subdomains.
// expires or max-age sets the cookie expiration time. Without them the cookie dies when the browser is closed.
// samesite forbids the browser to send the cookie with requests coming from outside the site. This helps to prevent XSRF attacks.


// path=/ ، افتراضيًا ، يجعل البيانات المخزنة ضمن كوكيز مرئيًا تحت هذا المسار فقط.
// domain = site.com ، بشكل افتراضي ، يكون البيانات المخزنة ضمن كوكيز مرئيًا على النطاق الحالي فقط. إذا تم تعيين المجال بشكل صريح ، يصبح البيانات المخزنة ضمن كوكيز مرئيًا في المجالات الفرعية.
// expires أو max-age يعيّن وقت انتهاء صلاحية البيانات المخزنة ضمن كوكيز. بدونها يموت البيانات المخزنة ضمن كوكيز عند إغلاق المتصفح.
// samesite يحظر موقع الويب على المتصفح إرسال البيانات المخزنة 
// ضمن كوكيز مع الطلبات الواردة من خارج الموقع. هذا يساعد على منع هجمات XSRF.




// document.cookie = `course=; max-age=0; path=/;`
console.log(getCookie("course"))
console.log(getCookie("name"))


function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}



