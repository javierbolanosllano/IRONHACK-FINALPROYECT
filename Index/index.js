
var darkModeToggle = document.getElementById('dark-mode-toggle');
var body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});
