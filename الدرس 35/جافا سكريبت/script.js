var months = ["January","March","February","March"];



// function removeLastItem(){
//     months.push("April");
    
//     document.getElementById("result").innerHTML =months;
// }

var numberPart1 = [1,2,3,4,5];
var numberPart2 = [6,7,8,9,10];
var numbers = numberPart1.concat(numberPart2);


for(var counter = 0; counter<months.length; counter++){
    document.getElementById("result").innerHTML += months[counter] + "<br>";
}

function addItem(){

    var inputValue = document.getElementById("text").value;
    months.unshift(inputValue);
    document.getElementById("result").innerHTML =months;

}
// length
// indexOf()
// lastIndexOf()

// pop()   لحذف اخر قيمة من ارراي
// push()  يقوم باضافة قيمة جديدة لنهاية ارراي
// unshift()  يقوم بإضافة قيمة جديدة لبداية ارراي
// sort()

// includes()   هل يحتوي القيمة الذي نحددها

// concat()      لدمج ارراي 


