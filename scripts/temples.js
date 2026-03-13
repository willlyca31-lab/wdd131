
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");});

const year = new Date().getFullYear();
 document.getElementById("currentyear").textContent = year;
 document.getElementById("lastModified").textContent = 
 "Last Modification: "+document.lastModified;