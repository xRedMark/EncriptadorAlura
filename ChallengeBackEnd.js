function encriptar() {
  const fraseEncriptar = document
    .getElementById("textoParaCifrar")
    .value.toLowerCase();

  var textoParaCifrar = fraseEncriptar.replace(/e/gim, "enter");
  var textoParaCifrar = textoParaCifrar.replace(/i/gim, "imes");
  var textoParaCifrar = textoParaCifrar.replace(/a/gim, "ai");
  var textoParaCifrar = textoParaCifrar.replace(/o/gim, "ober");
  var textoParaCifrar = textoParaCifrar.replace(/u/gim, "ufat");

  document.getElementById("textoEncriptado").innerHTML = textoParaCifrar;

  var contenido = document.querySelector("#textoParaCifrar");
  contenido.select();
}
function desencriptar() {
  const fraseDesencriptar = document
    .getElementById("textoParaCifrar")
    .value.toLowerCase();

  var textoParaCifrar = fraseDesencriptar.replace(/enter/gim, "e");
  var textoParaCifrar = textoParaCifrar.replace(/imes/gim, "i");
  var textoParaCifrar = textoParaCifrar.replace(/ai/gim, "a");
  var textoParaCifrar = textoParaCifrar.replace(/ober/gim, "o");
  var textoParaCifrar = textoParaCifrar.replace(/ufat/gim, "u");

  document.getElementById("textoEncriptado").innerHTML = textoParaCifrar;
}
function copiar() {
  const contenido = document.querySelector("#textoEncriptado");
  contenido.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Error al copiar el: ", err);
  }
}

//No estes de chismoso viendo mi codigo XD