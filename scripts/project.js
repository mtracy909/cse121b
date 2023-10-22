/* Project*/

const charactersElement = document.querySelector("#characters");
let characterList = [];

/* displayCharacters Function */

const displayCharacters = (characters) => {
    characters.forEach (character => {
        let article = document.createElement("article");
        let id = document.createElement("id");
        id.textContent = `ID: ${character.id}`;
        let name = document.createElement("name");
        name.textContent = `Name: ${character.name}`;
        let slug = document.createElement("slug");
        slug.textContent = `Slug: ${character.slug}`;
        let powerstats = document.createElement("powerstats");
        powerstats.textContent = `Power Stats: ${character.powerstats}`;
        let appearance = document.createElement("appearance");
        appearance.textContent = `Appearance: ${character.appearance}`;
        let biography = document.createElement("biography");
        biography.textContent = `Biography: ${character.biography}`;
        let work = document.createElement("work");
        work.textContent = `Work: ${character.work}`;
        let connections = document.createElement("connections");
        connections.textContent = `Connections: ${character.connections}`;
        let images = document.createElement("images");
        images.textContent = `Images: ${character.images}`;
        let img = document.createElement("img");
        img.setAttribute("src", character.images.md);
        img.setAttribute("alt", `img of ${name}`);
        article.appendChild(id);
        article.appendChild(name);
        article.appendChild(slug);
        article.appendChild(powerstats);
        article.appendChild(appearance);
        article.appendChild(biography);
        article.appendChild(work);
        article.appendChild(connections);
        article.appendChild(images);
        article.appendChild(img);
        charactersElement.appendChild(article);
    })
}

/* reset Function */

const reset = () => {
    charactersElement.innerHTML = '';
}

/* async getCharacters Function using fetch()*/

const getCharacters = async () => {
    reset();
    const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    if (response.ok) {
        const converted = await response.json();
        characterList = converted;
        displayCharacters(characterList);
    }
}


/* sortBy Function */

const sortBy = (characters) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch(filter){
        case "good":
            let goodCharacters = characters.filter(character => character.biography.alignment.includes("good"));
            displayCharacters(goodCharacters);
            break;
        case "bad":
            let badCharacters = characters.filter(character => character.biography.alignment.includes("bad"));
            displayCharacters(badCharacters);
            break;
        case "all":
            displayCharacters(characters);
            break;
    }
}


getCharacters();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(characterList)});