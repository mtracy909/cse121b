/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach (temple => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const converted = await response.json();
        templeList = converted;
        displayTemples(templeList);
    }
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = '';
}

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch(filter){
        case "utah":
            let utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        case "notutah":
            let notUtahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(notUtahTemples);
            break;
        case "older":
            let filterDate = new Date(1950, 0, 1);
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < filterDate));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});