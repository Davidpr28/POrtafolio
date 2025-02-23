// Activar modo oscuro/claro
const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
    // Alterna la clase dark-mode en el body
    document.body.classList.toggle("dark-mode");

    // Cambia el ícono del botón dependiendo del modo
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Cambiar a ícono del sol para modo claro
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Cambiar a ícono de luna para modo oscuro
    }
});

// Animación de latido de las tarjetas
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        // Añadir la animación a las tarjetas
        card.classList.add("card-heart");
    });
});
