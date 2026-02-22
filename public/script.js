function updateWarDays() {
    const invasionDate = new Date('2022-02-24');
    const today = new Date();

    let years = today.getUTCFullYear() - invasionDate.getUTCFullYear();
    const anniversary = new Date(invasionDate);
    anniversary.setUTCFullYear(today.getUTCFullYear());

    if (today < anniversary) {
        years--;
        anniversary.setUTCFullYear(today.getUTCFullYear() - 1);
    }

    const diffTime = today - anniversary;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include today
    document.getElementById('warDays').innerHTML = `<b>${years} years and ${days} days of war!</b> `;
}
updateWarDays();

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

const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});
