const allowedNames = ["ankita", "ankita biswal", "kita", "kittu", "chingu"]; // Hardcoded list of allowed names
const storageKey = "valentine_auth_user";

// Check Authentication
function checkAuth() {
    const user = localStorage.getItem(storageKey);
    const path = window.location.pathname.toLowerCase();

    // Only redirect AWAY from protected pages if not logged in
    if (path.includes('valentine.html') || path.includes('success.html')) {
        if (!user) {
            window.location.href = "index.html";
        } else {
            const normalizedUser = user.trim().toLowerCase();
            if (!allowedNames.includes(normalizedUser)) {
                window.location.href = "warning.html";
            }
        }
    }
}

// Handle Login
function handleLogin() {
    const input = document.getElementById('nameInput');
    const name = input.value.trim().toLowerCase(); // Normalize input

    if (name) {
        localStorage.setItem(storageKey, name);
        window.location.href = "valentine.html";
    }
}

// Setup background hearts
function createHearts() {
    const path = window.location.pathname;
    // Only create hearts on valentine and success pages
    if (!path.includes('valentine.html') && !path.includes('success.html')) {
        return;
    }

    const body = document.body;
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        body.appendChild(heart);
    }
}

// Move No Button Logic
function moveNoButton() {
    const btn = document.getElementById('noBtn');
    if (!btn) return;

    // Get viewport dimensions
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    // Generate random coordinates
    // Ensure it doesn't go off screen
    const randomX = Math.max(0, Math.random() * maxX);
    const randomY = Math.max(0, Math.random() * maxY);

    // Apply new position
    btn.style.position = 'fixed'; // Switch to fixed to move freely around screen
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    checkAuth();

    // Login Page Logic
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', handleLogin);
        document.getElementById('nameInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }

    // Valentine Page Logic
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
        // Desktop: Hover
        noBtn.addEventListener('mouseover', moveNoButton);
        // Mobile: Touch/Click
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent click
            moveNoButton();
        });
        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            moveNoButton();
        });

        document.getElementById('yesBtn').addEventListener('click', () => {
            window.location.href = "success.html";
        });
    }
});
