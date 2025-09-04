// Toggle password visibility
const toggleBtn = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

toggleBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.style.color = 'white';
  } else {
    passwordInput.type = 'password';
    toggleBtn.style.color = 'rgba(255 255 255 / 0.6)';
  }
});

// Support keyboard toggle on button for accessibility
toggleBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleBtn.click();
  }
});
