
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Mantis Utah",
    location: "Mantis, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Aba Monterrey Mexico Temple",
    location: "Aba,  Monterrey, New Leon",
    dedicated: "2002, April, 2002",
    area: 16498,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-26392.jpg"
  },
  {
  templeName: "APort-au-Prince Haiti Temple",
    location: "HT Petion-Ville",
    dedicated: "2019, August , 2019",
    area: 966,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-6212.jpg"
  },
  {
  templeName: "Santo Domingo Dominican Republic Temple",
    location: "Santo Domingo, Distrito Nacional",
    dedicated: "2000, September , 2000",
    area:  6225,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-13008.jpg"
  },
];

const templeContainer = document.querySelector("#temple-cards");

function displayTemples(templeList) {
    templeContainer.innerHTML = "";

    for (let i = 0; i < templeList.length; i++) {
        const temple = templeList[i];

        const card = document.createElement("article");

        const name = document.createElement("h3");
        name.textContent = "Name:" + temple.templeName;
        card.appendChild(name);

        const location = document.createElement("p");
        location.textContent = "Location:"+temple.location;
        card.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.textContent = "Dedication date:" + temple.dedicated;
        card.appendChild(dedicated);

        const area = document.createElement("p");
        area.textContent = "sq ft area: " + temple.area + " sq ft";
        card.appendChild(area);

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy"; 
        
        card.appendChild(img);

        templeContainer.appendChild(card);
    }
}


function filterTemples(filter) {
    const filtered = [];

    for (let i = 0; i < temples.length; i++) {
        const temple = temples[i];
        const year = parseInt(temple.dedicated.split(",")[0]);

        if (filter === "Old" && year < 1900) {
            filtered.push(temple);
        } else if (filter === "New" && year > 2000) {
            filtered.push(temple);
        } else if (filter === "Large" && temple.area > 90000) {
            filtered.push(temple);
        } else if (filter === "Small" && temple.area < 10000) {
            filtered.push(temple);
        } else if (filter === "Home") {
            filtered.push(temple);
        }
    }

    displayTemples(filtered);
}

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const year = new Date().getFullYear();
 document.getElementById("currentyear").textContent = year;
 document.getElementById("lastModified").textContent = 
 "Last Modification: "+document.lastModified;

 displayTemples(temples)

 