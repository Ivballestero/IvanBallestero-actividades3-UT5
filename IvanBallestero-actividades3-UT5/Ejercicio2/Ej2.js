window.addEventListener("load", function () { setInterval(LeerTXT, 1500); }, true);

function LeerTXT() {
    let http = new XMLHttpRequest();
    http.open("GET", "texto.txt", true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) Lectura(this);
    };
}

let leidos = 0;

function Lectura(TXT) {
    var conversacion = document.getElementById("mensajes");
    let emisor = "Claudia";
    let receptor = "Yo";
    let archivoTXT = TXT.responseText;
    let mensajes = archivoTXT.split(/\r\n|\n/);
    let cantidad = mensajes.length;
    if (leidos < cantidad) {
        let parrafoMensaje = document.createElement("p");
        let texto = document.createTextNode(mensajes[leidos]);
        parrafoMensaje.appendChild(texto);
        conversacion.appendChild(parrafoMensaje);
        if (mensajes[leidos].split(":")[0] == emisor)
            parrafoMensaje.classList.add("mensaje_emisor");
        if (mensajes[leidos].split(":")[0] == receptor)
            parrafoMensaje.classList.add("mensaje_receptor");
        leidos++;
      }
    }