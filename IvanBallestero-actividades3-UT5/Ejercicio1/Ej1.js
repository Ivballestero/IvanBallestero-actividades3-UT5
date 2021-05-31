document.addEventListener(loadDocA("libros.xml"));

function loadDocA(fichero) {
    let http = new XMLHttpRequest();
    http.open("GET", fichero, true);
    http.send();
    http.addEventListener('load', (event) => 
    {
        if (http.status === 200) gestionarXML(http.responseXML)
    });
}

function Añadir(origen, elemento, clase, textoContenido) {
    let nodo = document.createElement(elemento);
    nodo.classList.add(clase);
    nodo.textContent = textoContenido;
    origen.appendChild(nodo);
    return nodo;
}

function AñadeEncabezado(elemento) {
    let encabezado = Añadir(elemento, "div", "encabezado", "");
    let apartados = ["ISBN", "Título", "Nivel profundidad", "Autor", "Editorial", "Fecha de publicacion", "Página web", "Precio"];
    for(let i = 0; i <= 7; i++) {
        Añadir(encabezado, "div", "seccion", apartados[i]);
    }
}

function gestionarXML(docXML) {
    let documentoXML = document.getElementById("tabla"); // div tabla en html
    let librerias = docXML.getElementsByTagName("libreria");

    for (let i = 0; i < librerias.length; i++) {
        let libreria = Añadir(documentoXML, "div", "libreria");
        let tabla = Añadir(libreria, "div", "tabla",);
        let apartados = ["ISBN", "Título", "Nivel profundidad", "Autor", "Editorial", "Fecha de publicacion", "Página web", "Precio"];
        let nombreLibreria = librerias[i].getElementsByTagName("nombre")[0].textContent;
        Añadir(tabla, "div", "columna", nombreLibreria);

        AñadeEncabezado(tabla);

        let libros = librerias[i].getElementsByTagName("libro");
        let minimo = minPrecio(libros);

        for (let j = 0; j < libros.length; j++) {
            
            if (minimo == Number(libros[j].getElementsByTagName("precio")[0].textContent))
                celda = "celdaMin";
            else
                celda = "celda";
            
            let fila = Añadir(tabla, "div", "fila", "");
            Añadir(fila, "div", celda, libros[j].getElementsByTagName("ISBN")[0].textContent);
            Añadir(fila, "div", celda, libros[j].getElementsByTagName("titulo")[0].textContent);
            Añadir(fila, "div", celda, libros[j].getElementsByTagName("nivelProfundidad")[0].textContent);
            Añadir(fila, "div", celda, libros[j].getElementsByTagName("autor")[0].textContent);
            Añadir(fila, "div", celda, libros[j].getElementsByTagName("editorial")[0].textContent);
            Añadir(fila, "div", celda, libros[j].getElementsByTagName("fechaPublicacion")[0].textContent);
            Añadir(fila, "div", celda, libros[j].getElementsByTagName("paginaWeb")[0].textContent);
            Añadir(fila, "div", celda, libros[j].getElementsByTagName("precio")[0].textContent);
        }
    }
}

function minPrecio(libros) 
{
    let minimo;
    let aux;
        for (let i = 0; i < libros.length; i++) {
            if (i == 0) minimo = Number(libros[i].getElementsByTagName("precio")[0].textContent);
            else{
                aux = Number(libros[i].getElementsByTagName("precio")[0].textContent);
                if (minimo > aux)  minimo = aux;
            }
        }
    return minimo;
}