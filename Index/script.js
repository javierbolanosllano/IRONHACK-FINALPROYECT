document.addEventListener('DOMContentLoaded', function () {
    // Cargar el estado del modo oscuro al cargar la página
    if (localStorage.getItem('darkMode') === 'enabled') {
      enableDarkMode();
    }
  });
  
  function toggleLoginForm() {
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'flex' : 'none';
  }
  
  function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }
  
  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }
  
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Corregir aquí
  }
  
  function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Validar que los campos de correo y contraseña no estén vacíos
    if (email.trim() === '' || password.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    // Puedes agregar tu lógica de autenticación real aquí
    // En este ejemplo, simplemente redirigimos a la página 'bienvenido.html'
    window.location.href = '../Tareas/Tareas.html';
  }
  