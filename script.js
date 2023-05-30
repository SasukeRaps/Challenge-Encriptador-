var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var pochita = document.querySelector(".contenedorpersonaje");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".text-resultado");
var botonLimpiar = document.querySelector(".btn-limpiar");
var contenidoOriginal = contenedor.innerHTML;


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonLimpiar.onclick = limpiar;

function encriptar (){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatext")
    return cajatexto.value
}

function ocultarAdelante(){
    pochita.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "utaf"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}


function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i=0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i= i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i= i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function limpiar() {
    resultado.textContent = "";
    contenedor.innerHTML = contenidoOriginal;
    pochita.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");

  }

const btnCopy = document.querySelector(".btn-copy")
btnCopy.addEventListener("click",copiar = () =>{
var contenido = document.querySelector(".text-resultado").textContent
navigator.clipboard.writeText(contenido)
console.log("hola")
})


window.addEventListener('DOMContentLoaded', () => {
    const cajaText = document.querySelector('.cajatext');
  
    cajaText.addEventListener('input', () => {
      const inputValue = cajaText.value;
      const regex = /[^a-z0-9\s]+/gi;
      const formattedText = inputValue.toLowerCase().replace(regex, '');
  
      if (inputValue !== formattedText) {
        // Caracteres no permitidos
        alert('No se permiten mayúsculas, caracteres especiales ni acentos en este campo.');
        // Limpia el campo
        cajaText.value = formattedText;
      }
    });
  });
  
  