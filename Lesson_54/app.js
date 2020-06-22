// Event       -     addEventListener 
// ---------------------------------------------------------
// onkeyup     -     keyup لتنفيذ الأوامر عند نقر على احد ازرار كيبورد ورفع اصبع عنها
// onkeydown   -     keydown             لتنفيذ الأوامر  بمجرد نقر على احد ازرار كيبورد
//------------------------------------
//    لتنفيذ الأوامر  بمجرد نقر على احد ازرار كيبورد - يعمل فقط على ازرار حروف وارقام 
// onkeypress    -     keypress 
//------------------------------------
// method : key         code
// ---------------------------------------------------------
// Coder Shiyar - YouTube : http://youtube.com/codershiyar
//-----------------------------------------------------------

document.addEventListener("keyup",(event)=>{
  if(event.key === "Enter"){
    alert("قمت بنقر على زر انتر");
  }

});

function run_key(event){
  // if(event.key  == "1"){
  //   location.reload();
  // }
  // if(event.code === "KeyB"){
  //   alert(event.code);
  // }
  // alert(event.key);
}





