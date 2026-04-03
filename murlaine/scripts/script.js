// ✅ GLOBAL FUNCTION
function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
    });

    localStorage.setItem("language", lang);
}

// ✅ MAIN SCRIPT
document.addEventListener("DOMContentLoaded", function () {

    // Load saved language
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);

    // MENU
    const menu = document.getElementById("menu");
    const nav = document.getElementById("nav");

    if (menu && nav) {
        menu.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    // FORM
    const form = document.getElementById("form");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            localStorage.setItem("clientName", name);

            alert("Thank you " + name + "! We will contact you soon.");
        });
    }

    // FOOTER
    const yearEl = document.getElementById("currentyear");
    const modEl = document.getElementById("lastModified");

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (modEl) {
        modEl.textContent = "Last Modification: " + document.lastModified;
    }

});