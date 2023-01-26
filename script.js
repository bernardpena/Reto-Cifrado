
function encriptar(){
    var texto = document.getElementById("textArea").value.toLowerCase();
     
    alert("hola");
    var textoCifrado =texto.replace(/e/igm,"enter");
    var textoCifrado =textoCifrado.replace(/o/igm,"ober");
    var textoCifrado =textoCifrado.replace(/i/igm,"imes");
    var textoCifrado =textoCifrado.replace(/a/igm,"ai");
    var textoCifrado =textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("img").style.display = "none";
    document.getElementById("parrafo_Final").style.display = "none";
    document.getElementById("resultadoTexto").innerHTML = textoCifrado;
    document.getElementById("resultadoTexto").style.display = "show";
    document.getElementById("btn-Copiar").style.display = "show";
    document.getElementById("btn-Copiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("textArea").value.toLowerCase();
     
    alert("hola");
    var textoCifrado =texto.replace(/enter/igm,"i");
    var textoCifrado =textoCifrado.replace(/ober/igm,"o");
    var textoCifrado =textoCifrado.replace(/imes/igm,"i");
    var textoCifrado =textoCifrado.replace(/ai/igm,"a");
    var textoCifrado =textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("img").style.display = "none";
    document.getElementById("parrafo_Final").style.display = "none";
    document.getElementById("resultadoTexto").innerHTML = textoCifrado;
    document.getElementById("resultadoTexto").style.display = "show";
    document.getElementById("btn-Copiar").style.display = "show";
    document.getElementById("btn-Copiar").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("resultadoTexto");
    contenido.select();
    document.execCommand("copy");
    alert("Se Copio");
     
}