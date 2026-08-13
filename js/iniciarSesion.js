// Seleccionamos el botón
  const boton = document.getElementById("btn-iniciar");

  // Le damos la acción al hacer clic
  boton.addEventListener("click", () => {
    
    // 1. Capturamos lo que el usuario escribió en el primer input
    const nombreEscrito = document.getElementById("input-usuario").value;

    // 2. Redirigimos a la otra página mandando ese nombre en el link
    // Cambia "tu_otro_html.html" por el nombre real de tu archivo
    window.location.href = "sesionUsuario.html?nombre=" + nombreEscrito;
    
  });