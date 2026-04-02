const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

// Form UX
const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;

        localStorage.setItem("clientName", name);

        alert("Thank you " + name + "! We will contact you soon.");
    });
}

// FOOTER DATE
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

