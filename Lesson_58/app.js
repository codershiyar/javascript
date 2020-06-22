 //  Event        -     addEventListener
//------------------------------------------
//  onchange     -     change    

// يستخدم هذا افنت لكي تتمكن من تنفيذ اوامر في كل مرة يتم تغير قيمة 
// select , input , checkbox 


document.getElementById("color").addEventListener("change", ()=>{

    document.body.style.background = document.getElementById('color').value;
});

document.getElementById("checkbox").addEventListener("change",()=>{

    alert("تم تنفيذ الأوامر");
});


document.getElementById("password").addEventListener("input",()=>{
    alert("تم تنفيذ الأوامر");
});