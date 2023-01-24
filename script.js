
var botonEncriptar =document.querySelector(".btn-Encriptar");
var botonDesencriptar =document.querySelector(".btn-Desencriptar");
var muneco = document.querySelector(".contenedorImagen");
var h3 = document.querySelector(".contenedorSubtitulo");
var p = document.querySelector(".contenedorParrafos");
var resultado = document.querySelector(".resultadoTexto");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarOtros();
    resultado.textContent = encriptadoTexto(recuperarTexto());
}

function desencriptar(){
    ocultarOtros();
    resultado.textContent = desencriptadoTexto(recuperarTexto());
   
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

function encriptadoTexto(mensaje){
    var texto = mensaje;
    var textoCodificado ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoCodificado = textoCodificado + "ai"
        }
        else if(texto[i] == "e"){
            textoCodificado = textoCodificado + "enter"
        }
        else if(texto[i] == "i"){
            textoCodificado = textoCodificado + "imes" 
        }
        else if(texto[i] == "o"){
            textoCodificado = textoCodificado + "ober"  
        }
        else if(texto[i] == "u"){
            textoCodificado = textoCodificado + "ufat"  
        }
        else{
            textoCodificado = textoCodificado + texto[i];
        }
    }
    return textoCodificado;
}

function desencriptadoTexto(mensaje){
    var texto = mensaje;
    var textoCodificado ="";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoCodificado = textoCodificado + "a"
            i = i +1;
        }
        else if(texto[i] == "e"){
            textoCodificado = textoCodificado + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoCodificado = textoCodificado + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoCodificado = textoCodificado + "o" 
            i = i + 3; 
        }
        else if(texto[i] == "u"){
            textoCodificado = textoCodificado + "u" 
            i = i + 3; 
        }
        else{
            textoCodificado = textoCodificado + texto[i];
        }
    }
    return textoCodificado;
}