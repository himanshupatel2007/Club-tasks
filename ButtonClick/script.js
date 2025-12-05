let redbox = document.querySelector(".red")
let greenbox = document.querySelector(".green")
let bluebox = document.querySelector(".blue")
let yellowbox = document.querySelector(".yellow")

let redtext = document.querySelector("#red")
let yellowtext = document.querySelector("#yellow")
let greentext = document.querySelector("#green")
let bluetext = document.querySelector("#blue")

let leadingblock = document.querySelector("h3")
let red = blue = yellow = green = 0
let arr = document.querySelectorAll(".cc")

redbox.addEventListener("click", () => {
    red++
    redtext.textContent = `Clicks : ${red}`
    updateleader()
})

yellowbox.addEventListener("click", () => {
    yellow++
    yellowtext.textContent = `Clicks : ${yellow}`
    updateleader()
})

greenbox.addEventListener("click", () => {
    green++
    greentext.textContent = `Clicks : ${green}`
    updateleader()
})

bluebox.addEventListener("click", () => {
    blue++
    bluetext.textContent = `Clicks : ${blue}`
    updateleader()
})

function resetclicks() {
    red = blue = yellow = green = 0
    redtext.textContent = `Clicks : ${red}`
    yellowtext.textContent = `Clicks : ${yellow}`
    bluetext.textContent = `Clicks : ${blue}`
    greentext.textContent = `Clicks : ${green}`
    leadingblock.textContent = "Leader : ------"
}

function updateleader() {
    let leader = Math.max(red, blue, yellow, green)
    switch (leader) {

        case red: leadingblock.textContent = `Leader : Red `
            addcrown("red")
            break;
        case blue: leadingblock.textContent = `Leader : Blue `
            addcrown("blue")
            break;
        case green: leadingblock.textContent = `Leader : Green `
            addcrown("green")
            break;
        case yellow: leadingblock.textContent = `Leader : Yellow `
            addcrown("yellow")
            break;
    }
}

function addcrown(value) {

    arr.forEach(e => {
        if (e.classList.contains(value)) {
            e.classList.add("crown")
            e.textContent = "👑"
        }
        else {
            e.classList.remove("crown")
            e.textContent = ""
        }
    })
}