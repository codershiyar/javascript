// Coder Shiyar   -   https://youtube.com/codershiyar
// ----------------------------------------------------
// Fetch Get - API JSON 
// ----------------------------------------------------
const url = "https://randomuser.me/api/?results=5";
fetch(url).then( response => { return response.json()}).then(data =>{

        console.log(data.results);
        
}).catch(error =>{
        // هنا نضع اوامر الذي نرغب بتنفيذها عند حدوث خطا اثناء استرداد بيانات من  API

    console.log(error);  // هنا طلبنا بعر ض الخطا الذي حدث اثناء استرداد البيانات 
})
















