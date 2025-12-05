
let value = styles = index = ""
let themeclass = document.querySelector("#themetoggle")
let buttons = document.querySelectorAll("button")
let favourite = document.querySelector(".setfavourite")
let applyfavourite = document.querySelector(".applyfavourite")

function identifying(value) {

    themeclass.href = value;
    favourite.classList.remove("hideit")
    if (localStorage.getItem("fav")) 
        applyfavourite.classList.remove("hideit")

}

favourite.addEventListener("click", () => {

    localStorage.setItem("fav", themeclass.href)

})


applyfavourite.addEventListener("click", () => {

    let value = localStorage.getItem("fav")
    themeclass.href = value;

})


window.onload = () => {

    if (LocalStorage.getItem("fav")) 
        applyfavourite.classList.remove("hideit")
    

}
