// Elements
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
const themeToggle = document.querySelector("#themeToggle");

// FUNCTION 1: Toggle Menu
function toggleMenu() {
    navMenu.style.display =
        navMenu.style.display === "block" ? "none" : "block";
}

menuBtn.addEventListener("click", toggleMenu);

// FUNCTION 2: Toggle Theme
function toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
}

themeToggle.addEventListener("click", toggleTheme);

// FUNCTION 3: Load Theme
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
}

loadTheme();

// FUNCTION 4: Example using array + object + template literal
function showMessage() {
    const features = ["AI Matching", "Online Therapy", "Multilingual Support"];

    const app = {
        name: "GOOD Psychotherapists",
        version: "1.0"
    };

    const message = `Welcome to ${app.name}. Features include: ${features.join(", ")}`;

    console.log(message);
}

showMessage();