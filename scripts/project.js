/* Project*/

/* import displayCharacters function */

import { displayCharacters } from "./displayCharacters.js";

let characterList = [];
const charactersElement = document.querySelector("#characters");

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
        case "male":
            let maleCharacters = characters.filter(character => character.appearance.gender.includes("Male"));
            displayCharacters(maleCharacters);
            break;
        case "female":
            let femaleCharacters = characters.filter(character => character.appearance.gender.includes("Female"));
            displayCharacters(femaleCharacters);
            break;
        case "all":
            displayCharacters(characters);
            break;
    }
}

getCharacters();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(characterList)});