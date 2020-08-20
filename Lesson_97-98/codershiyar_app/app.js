const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLMTdZ61eBnyrnapIyOphXAkIcR5DDOGkz&maxResults=50&key=AIzaSyAaRjH-yWMxGLPBOvDdqkGjTn84-wqY--o";
fetch(url).then( response => { return response.json()}).then(data =>{

        getData(data.items);
        document.getElementById("player").src = "https://www.youtube.com/embed/"+data.items[0].snippet.resourceId.videoId + "?showinfo=0; rel=0;";
}).catch(error =>{
        // هنا نضع اوامر الذي نرغب بتنفيذها عند حدوث خطا اثناء استرداد بيانات من  API

    console.log(error);  // هنا طلبنا بعر ض الخطا الذي حدث اثناء استرداد البيانات 
})


function getData(data){
    console.log(data);
    data.forEach(element => {
       var title =  element.snippet.title;
       var videoId = element.snippet.resourceId.videoId;
       var img = element.snippet.thumbnails.high.url;
       var description = element.snippet.description;
     
       document.getElementById("content").innerHTML +=
        '<div class="card-header shadow p-3 mb-5 bg-white rounded" onclick="loadVideo(\'' +videoId+ '\')"> ' + title+  '</div>'
        
       ;
     
    });
}


function loadVideo(videoId){

document.getElementById("player").src= "https://www.youtube.com/embed/"+videoId + "?showinfo=0; rel=0;";

}




setInterval(function () {
    document.getElementById("player").style.height =
        document.getElementById("player").getBoundingClientRect().width * 0.5625 + "px";

},1000);