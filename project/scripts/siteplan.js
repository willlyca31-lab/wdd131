const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
const themeToggle = document.querySelector("#themeToggle");

// Toggle menu
menuBtn.addEventListener("click", () => {
    navMenu.style.display =
        navMenu.style.display === "block" ? "none" : "block";
});

// Dark mode with localStorage
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}