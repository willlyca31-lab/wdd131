document.addEventListener("DOMContentLoaded", function () {

    const menu = document.getElementById("menu");
    const nav = document.getElementById("nav");

    if (menu && nav) {
         menu.addEventListener("click", () => {
             nav.classList.toggle("open");
         });
    }

    function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Save user preference
    localStorage.setItem("language", lang);
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
});

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
    const year = new Date().getFullYear();
    const yearEl = document.getElementById("currentyear");
    const modEl = document.getElementById("lastModified");

    if (yearEl) {
        yearEl.textContent = year;
    }

    if (modEl) {
        modEl.textContent = "Last Modification: " + document.lastModified;
    }

});
