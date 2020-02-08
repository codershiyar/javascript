var idLogo = document.getElementById("logo");

// if(idLogo.hasAttribute){
// alert("نعم");
// }


console.log(idLogo.getAttribute("class"));

idLogo.setAttribute("src","js.jpg");
idLogo.setAttribute("width","40%");
idLogo.setAttribute("height","300px");

idLogo.removeAttribute("class");
idLogo.removeAttribute("height");

// hasAttribute
// getAttribute
// setAttribute 
// removeAttribute

if(idLogo.getAttribute("src")==null){
  idLogo.removeAttribute("src");
}