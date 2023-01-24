
var botonEncriptar =document.querySelector(".btn-Encriptar");
var botonDesencriptar =document.querySelector(".btn-Desencriptar");
var muneco = document.querySelector(".contenedorImagen")
var h3 = document.querySelector(".contenedorSubtitulo")
var p = document.querySelector(".contenedorParrafos")

botonEncriptar.onclick = encriptar;

function encriptar(){
    ocultarOtros();
    

}

function recuperarTexto(){
    var texto =document.querySelector(".textarea");
    return texto.value;

}

function ocultarOtros(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    p.classList.add("ocultar");

}