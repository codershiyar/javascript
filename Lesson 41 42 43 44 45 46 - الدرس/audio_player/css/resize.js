

setInterval(()=>{
    var width = screen.width;
    var height = screen.height;

 if(width<=768){
 
     document.getElementById("audio_player").style.width = width+"px";
     document.getElementById("audio_player").style.height = height+"px";

    }});
    