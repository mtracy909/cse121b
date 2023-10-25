export function displayCharacters(characters) {
    const charactersElement = document.querySelector("#characters");
    characters.forEach (character => {
        let article = document.createElement("article");
        let id = document.createElement("div");
        id.textContent = character.id;
        id.style.display = "none";
        let name = document.createElement("h3");
        name.textContent = character.name;
        let slug = document.createElement("div");
        slug.textContent = character.slug;
        slug.style.display = "none";

//Powerstats
        let intelligence = document.createElement("div");
        intelligence.textContent = `Intelligence: ${character.powerstats.intelligence}`;
        let strength = document.createElement("div");
        strength.textContent = `Strength: ${character.powerstats.strength}`;
        let speed = document.createElement("div");
        speed.textContent = `Speed: ${character.powerstats.speed}`;
        let durability = document.createElement("div");
        durability.textContent = `Durability: ${character.powerstats.durability}`;
        let power = document.createElement("div");
        power.textContent = `Power: ${character.powerstats.power}`;
        let combat = document.createElement("div");
        combat.textContent = `Combat: ${character.powerstats.combat}`;
        let powerstats = document.createElement("div");
        powerstats.innerHTML = `Power Stats:<br>
        <div class="indent">${intelligence.textContent}</div>
        <div class="indent">${strength.textContent}</div>
        <div class="indent">${speed.textContent}</div>
        <div class="indent">${durability.textContent}</div>
        <div class="indent">${power.textContent}</div>
        <div class="indent">${combat.textContent}</div>`;
//Appearance
        let gender = document.createElement("div");
        gender.textContent = `Gender: ${character.appearance.gender}`;
        let race = document.createElement("div");
        race.textContent = `Race: ${character.appearance.race}`;
        let height = document.createElement("div");
        height.textContent = `Height: ${character.appearance.height}`;
        let weight = document.createElement("div");
        weight.textContent = `Weight: ${character.appearance.weight}`;
        let eyeColor = document.createElement("div");
        eyeColor.textContent = `Eye Color: ${character.appearance.eyeColor}`;
        let hairColor = document.createElement("div");
        hairColor.textContent = `Hair Color: ${character.appearance.hairColor}`;
        let appearance = document.createElement("div");
        appearance.innerHTML = `Appearance:<br>
        <div class="indent">${gender.textContent}</div>
        <div class="indent">${race.textContent}</div>
        <div class="indent">${height.textContent}</div>
        <div class="indent">${weight.textContent}</div>
        <div class="indent">${eyeColor.textContent}</div>
        <div class="indent">${hairColor.textContent}</div>
        <div class="indent">${appearance.textContent}</div>`;
//Biography
        let fullName = document.createElement("div");
        fullName.textContent = `Full Name: ${character.biography.fullName}`;
        let alterEgos = document.createElement("div");
        alterEgos.textContent = `Alter Egos: ${character.biography.alterEgos}`;
        let aliases = document.createElement("div");
        aliases.textContent = `Aliases: ${character.biography.aliases}`;
        let birthLocation = document.createElement("div");
        birthLocation.textContent = `Place of Birth: ${character.biography.placeOfBirth}`;
        let firstAppearance = document.createElement("div");
        firstAppearance.textContent = `First Appearance: ${character.biography.firstAppearance}`;
        let publisher = document.createElement("div");
        publisher.textContent = `Publisher: ${character.biography.publisher}`;
        let alignment = document.createElement("div");
        alignment.textContent = `Alignment: ${character.biography.alignment}`;
        let biography = document.createElement("div");
        biography.innerHTML = `Biography:<br>
        <div class="indent">${fullName.textContent}</div>
        <div class="indent">${alterEgos.textContent}</div>
        <div class="indent">${aliases.textContent}</div>
        <div class="indent">${birthLocation.textContent}</div>
        <div class="indent">${firstAppearance.textContent}</div>
        <div class="indent">${publisher.textContent}</div>
        <div class="indent">${alignment.textContent}</div>`;
//Work
        let occupation = document.createElement("div");
        occupation.textContent = `Occupation: ${character.work.occupation}`
        let base = document.createElement("div");
        base.textContent = `Base: ${character.work.base}`
        let work = document.createElement("div");
        work.innerHTML = `Work:<br>
        <div class="indent">${occupation.textContent}</div>
        <div class="indent">${base.textContent}</div>`;
//Connections
        let affiliation = document.createElement("div");
        affiliation.textContent = `Group Affiliation: ${character.connections.groupAffiliation}`
        let relatives = document.createElement("div");
        relatives.textContent = `Relatives: ${character.connections.relatives}`
        let connections = document.createElement("div");
        connections.innerHTML = `Connections:<br>
        <div class="indent">${affiliation.textContent}</div>
        <div class="indent">${relatives.textContent}</div>`;
        connections.style.display = "none";
//images
        let xs = document.createElement("div");
        xs.textContent = `XS: ${character.images.xs}`
        let sm = document.createElement("div");
        sm.textContent = `SM: ${character.images.sm}`
        let md = document.createElement("div");
        md.textContent = `MD: ${character.images.md}`
        let lg = document.createElement("div");
        lg.textContent = `LG: ${character.images.lg}`
        let images = document.createElement("div");
        images.innerHTML = `Images:<br>
        <div class="indent">${xs.textContent}</div>
        <div class="indent">${sm.textContent}</div>
        <div class="indent">${md.textContent}</div>
        <div class="indent">${lg.textContent}</div>`;
        images.style.display = "none";

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