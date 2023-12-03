document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before accessing elements

  document.getElementById('input').addEventListener('change', () => {
    if (document.body.className.indexOf('dark') === -1) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });

  const loginBtn = document.getElementById('login-btn');
  const loginForm = document.getElementById('login-form');

  // Hide the login form initially
  loginForm.style.display = 'none';

  loginBtn.addEventListener('click', () => {
    // Toggle the display property of the login form
    loginForm.style.display = loginForm.style.display === 'none' ? 'flex' : 'none';
  });
});
