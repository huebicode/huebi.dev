// Theme Toggle Logic
const themeBtn = document.getElementById('theme-switch');
const sunIcon = themeBtn.querySelector('.sun-icon');
const moonIcon = themeBtn.querySelector('.moon-icon');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
    moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
}

// Sync icons with the theme set in <head>
const currentTheme = document.documentElement.getAttribute('data-theme');
sunIcon.style.display = currentTheme === 'dark' ? 'none' : 'block';
moonIcon.style.display = currentTheme === 'dark' ? 'block' : 'none';

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});
