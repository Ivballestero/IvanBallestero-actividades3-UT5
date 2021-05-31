window.onload = Formulario();

function CreaCapa(padre, elemento, clase, textoContenido) {
    let capa = document.createElement(elemento);
    capa.classList.add(clase);
    capa.textContent = textoContenido;
    padre.appendChild(capa);
    return capa;
}

function Formulario() {
    let contenedor = document.getElementById("contenedor");
    let formulario = document.createElement("form");
    formulario.id = "formulario";
    contenedor.appendChild(formulario);

    let contenido = CreaCapa(formulario, "div", "tabla", "");

    let correo = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(correo, "label", "Email", "Email: ");
    let email = CreaCapa(correo, "input", "email", "");
    email.id = "email";
    email.pattern = "[A-Za-z0-9\.]+@iesdoctorbalmis.com";
    email.required = true;

    let divPass = CreaCapa(contenido, "div", "fila", "");
    CreaCapa(divPass, "label", "contraseña", "Contraseña: ");

    let password = CreaCapa(divPass, "input", "password");
    password.type = "password";
    password.id = "contraseña";
    password.pattern = "[0-9]{8}";
    password.required = true;
    
    let divBoton = CreaCapa(contenido, "div", "fila");
    let boton = CreaCapa(divBoton, "input", "boton");
    boton.type = "submit";
    boton.id = "boton";
    boton.value = "Enviar";
}