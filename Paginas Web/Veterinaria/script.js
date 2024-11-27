// Script para manejar el formulario de contacto
document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validación simple
    if (nombre && email && mensaje) {
        document.getElementById("respuesta").innerHTML = `
            <p><strong>Gracias por tu mensaje, ${nombre}!</strong></p>
            <p>Nos pondremos en contacto contigo lo más pronto posible.</p>
        `;
        // Limpiar el formulario
        document.getElementById("formularioContacto").reset();
    } else {
        document.getElementById("respuesta").innerHTML = `
            <p style="color: red;">Por favor, completa todos los campos.</p>
        `;
    }
});
