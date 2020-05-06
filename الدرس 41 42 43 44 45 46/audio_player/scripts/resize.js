

setInterval(()=>{
    var width = screen.width;
    var height = screen.height;
	
 if(width<=1024){
 
     document.getElementById("audio_player").style.width = width+"px";
     document.getElementById("audio_player").style.height = height+"px";

    }
    if(screen.width<=320){
     document.getElementById("audio_player").style.height = 100+height+"px";

    }
});
    