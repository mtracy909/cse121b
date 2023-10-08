/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Michael Tracy",
    photo: "images/Michael.JPEG",
    favoriteFoods: [
        "Pizza",
        "Cheeseburgers",
        "Chicken Parmesean",
        "Meatloaf",
        "Chicken Tikka Masala"],
    hobbies: [
        "Sports",
        "Reading",
        "TV",
        "Movies",
        "Video Games"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Lawrenceville, GA",
        length: "3 years"
    }
)

myProfile.placesLived.push(
    {
        place: "London, England",
        length: "2 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Durham, NC",
        length: "8 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Chapel Hill, NC",
        length: "6 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Rexburg, ID",
        length: "1 year"
    }
)

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("img").setAttribute("src", myProfile.photo);
document.querySelector("img").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach (food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach (hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach (placeLived => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = placeLived.place;
    dd.textContent = placeLived.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})