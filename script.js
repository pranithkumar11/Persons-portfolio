// Toggle Light and Dark Themes
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// Interactive Portfolio Counter
const counterBtn = document.getElementById('counter-btn');
const viewCountDisplay = document.getElementById('view-count');

let views = 0;

counterBtn.addEventListener('click', () => {
    views++;
    viewCountDisplay.textContent = views;
});