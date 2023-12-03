document.getElementById('input').addEventListener('change', () => {
    if (document.body.className.indexOf('dark') === -1) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
  
  document.getElementById('login-btn').addEventListener('click', () => {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'flex' : 'none';
  });
  