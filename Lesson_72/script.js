
class MyPage{
  constructor(){
    this.myInterval = setInterval(()=>{

      this.testInterVal();
      this.test2();
    },4000);

    document.getElementById("stop").addEventListener("click",()=>{
      this.stopInterVal();
    });

  }
  testInterVal(){
    alert("يعمل");
  }
  test2(){
    console.log("test");
  }
  stopInterVal(){
    clearInterval(this.myInterval);
  }
}
onload = new MyPage();

// function test(){
//   alert("HI");
// }
// var myInterval = setInterval(test,3000);

// function stopInterval(){
//   clearInterval(myInterval);
// }

