window.onload = Formulario();
document.getElementById("formulario").addEventListener("submit", Validar());

function CreaCapa(padre, elemento, clase, textoContenido) {
    let capa = document.createElement(elemento);
    capa.classList.add(clase);
    capa.textContent = textoContenido;
    padre.appendChild(capa);
    return capa;
}

function Formulario(){
    let contenedor = document.getElementById("contenedor");
    let formulario = document.createElement("form");
    formulario.id = "formulario";
    contenedor.appendChild(formulario);

    let contenido = CreaCapa(formulario, "div", "tabla", "");

    let divUsuario = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divUsuario, "label", "usuario", "Usuario: ");
    let usuario = CreaCapa(divUsuario, "input", "usuario", "");
    usuario.id = "usuario";
    usuario.required = true;
    usuario.pattern = "^([A-Z]{1})[A-Za-z0-9]+([0-9]{1})$";

    let divContraseña = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divContraseña, "label", "contraseña", "Contraseña: ");
    let contraseña = CreaCapa(divContraseña, "input", "contraseña", "");
    contraseña.id = "contraseña";
    contraseña.type = "password";
    contraseña.required = true;
    contraseña.pattern = "^([0-9]{1})[0-9a-zA-Z]+([A-Z]{1})$";

    let divComprobacion = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divComprobacion, "label", "comprobacion", "Repita Contraseña: ");
    let comprobacion = CreaCapa(divComprobacion, "input", "comprobacion", "");
    comprobacion.id = "comprobacion";
    comprobacion.required = true;
    comprobacion.type = "password";

    let divEmail = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divEmail, "label", "email", "Email: ");
    let email = CreaCapa(divEmail, "input", "email", "");
    email.id = "email";
    email.required = true;

    let divNombre = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divNombre, "label", "nombre", "Nombre: ");
    let nombre = CreaCapa(divNombre, "input", "nombre", "");
    nombre.id = "nombre";
    nombre.required = true;
    nombre.pattern = "^[A-Z]{1}[a-z}+";

    let divApellido = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divApellido, "label", "apellido", "Apellidos: ");
    let apellido = CreaCapa(divApellido, "input", "apellido", "");
    apellido.id = "apellido";
    apellido.required = true;
    apellido.pattern = "^[A-Z]{1}[a-z]+(\s)?([A-Z]{1}[a-z]+)?$";

    let divEdad = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divEdad, "label", "edad", "Edad: ");
    let edad = CreaCapa(divEdad, "input", "edad", "");
    edad.id = "edad";
    edad.required = false;
    edad.pattern = "^[0-9][0-9]?";

    let divTelefono = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divTelefono, "label", "telefono", "Teléfono: ");
    let telefono = CreaCapa(divTelefono, "input", "telefono", "");
    telefono.id = "telefono";
    telefono.required = true;
    telefono.pattern = "^[679]{1}[0-9]{8}$";

    let divBoton = CreaCapa(contenido, "div", "fila");
    let boton = CreaCapa(divBoton, "input", "boton");
    boton.type = "submit";
    boton.id = "boton";
    boton.value = "Registrarse";

    let validacion = true;

    validacion = Validar("usuario");
    validacion = Validar("contraseña");
    if(contraseña.value != comprobacion.value) validacion = false;
    validacion = Validar("nombre");
    validacion = Validar("apellido");
    validacion = Validar("edad");
    validacion = Validar("telefono");
}

function Validar(etiqueta){
    let validado = true;
    let capaAux = document.getElementById("oculta");
    let patron = (etiqueta.pattern).value;
    let etiquetaAComprobar = document.getElementById(etiqueta).value;

    if(!patron.test(etiquetaAComprobar)){
        capaAux.setAttribute("style", "white-space: pre;");
        capaAux.style.visibility = "visible";
        etiqueta.style.border = "solid red";
        capaAux.textContent = "Error en " + etiqueta;
        validado = false;
    }

    return true;
}