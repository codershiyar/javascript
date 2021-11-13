// JavaScript Console methods - اوامر الجاهزة الذي يستخدم مع لوحة تحكم في متصفح او يسمى وضع مطورين
// ---------------------------------------------------------------------------------------
// Method	            Description
// ------------------------------------------------------------------------------------
// log()	  لإخراج رسالة إلى وحدة التحكم او لعرض بيانات بها
// assert()	  يكتب رسالة خطأ إلى وحدة التحكم إذا كان التأكيد خاطئًا
// error()	  إخراج رسالة خطأ إلى وحدة التحكم
// info()	  إخراج رسالة إعلامية إلى وحدة التحكم
// warn()	  يقوم بإخراج رسالة تحذير إلى وحدة التحكم
// clear()	  يمسح وحدة التحكم
// count()	  يسجل عدد المرات التي تم فيها استدعاء هذا الاستدعاء 
// groupCollapsed()	ينشئ مجموعة مضمنة جديدة في وحدة التحكم. ومع ذلك ، يتم إنشاء المجموعة الجديدة 
//                                      مطوية. سيحتاج المستخدم إلى استخدام زر الكشف لتوسيعه         
// groupEnd()	        يخرج من المجموعة المضمنة الحالية في وحدة التحكم
// group()	            ينشئ مجموعة مضمنة جديدة في وحدة التحكم. هذه المسافة البادئة بعد رسائل وحدة التحكم بمستوى إضافي ، حتى يتم استدعاء console.groupEnd ()
// time()	           يبدأ مؤقتًا (يمكنه تتبع المدة التي تستغرقها العملية)
// timeEnd()	       يوقف عداد الوقت الذي تم تشغيله مسبقًا بواسطة console.time ()

console.time()

var name = "Coder Shiyar"
console.group()
console.warn(name)
console.error(name)
console.groupEnd()

console.timeEnd()














// Method	            Description
// ------------------------------------------------------------------------------------
// assert()	        Writes an error message to the console if the assertion is false
// error()	            Outputs an error message to the console
// info()	            Outputs an informational message to the console
// log()	            Outputs a message to the console
// warn()	            Outputs a warning message to the console
// clear()	            Clears the console
// count()	            Logs the number of times that this particular call to count() has been called

// groupCollapsed()	Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
// groupEnd()	        Exits the current inline group in the console
// group()	            Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
// time()	            Starts a timer (can track how long an operation takes)
// timeEnd()	        Stops a timer that was previously started by console.time()


