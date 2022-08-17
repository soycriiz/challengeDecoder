

function encriptar(){
    let mensaje = document.getElementById("mensaje1").value;

    if(mensaje == ""){
      alert("El campo de texto esta vacío");
    }else{

var mapObj = {
   a:"ai",
   e:"enter",
   i:"imes",
   o:"ober",
   u:"ufat"

};
str = mensaje.replace(/a|e|i|o|u/gi, function(matched){
  return mapObj[matched];
});
document.getElementById('salida').innerText=str;
document.getElementById("muñeco").style.display = "none";
document.getElementById("mne").style.display = "none";
document.querySelector(".panelSalida").style.justifyContent = "flex-start";
document.querySelector(".panelSalida").style.alignItems  = "stretch";
document.querySelector(".psalida").style.marginTop  = "10%";
document.querySelector(".psalida").style.marginBottom  = "10%";
document.querySelector(".copiar").style.display  = "block";
document.querySelector(".cajaCopiar").style.display  = "flex";
    }
}


function desencriptar(){
    let mensaje = document.getElementById("mensaje1").value;
    if(mensaje == ""){
      alert("El campo de texto esta vacío");
    }else{
    var mapObj = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    
    };
    str = mensaje.replace(/ai|enter|imes|ober|ufat/gi, function(matched){
      return mapObj[matched];
    });
    document.getElementById('salida').innerText=str;

  
  document.getElementById("muñeco").style.display = "none";
  document.getElementById("mne").style.display = "none";
  document.querySelector(".panelSalida").style.justifyContent = "flex-start";
  document.querySelector(".panelSalida").style.alignItems  = "stretch";

  }
}


  let btn1=document.getElementById("encript");
  let btn2=document.getElementById("desencript");

btn1.addEventListener("click",encriptar);
btn2.addEventListener("click",desencriptar);

function copiar(){

 navigator.clipboard.writeText(str);
}

document.querySelector(".copiar").addEventListener("click",copiar);


