function toggleDarkMode() {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark-mode');
    console.log("Modo oscuro toggled");
}

// Ejemplo de cómo podrías añadir un evento a un botón para el modo oscuro
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
    if (darkModeToggleBtn) {
        darkModeToggleBtn.addEventListener('click', toggleDarkMode);
    }
});
