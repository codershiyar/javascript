var music = document.getElementById("music");
function playMusic(){
    music.play();
}
function pause(){
    music.pause();
}
function load(){
    music.load();
}

function stopVolume(){
    music.volume = 0;
}
function playVolume(){
    music.volume = 1;
}

function speedUp(){
    music.playbackRate +=0.10;
}
function slowDown(){
    music.playbackRate -=0.10;
}
if(music.ended == false){

}
// muted duration currentTime 
// playbackRate  ended

