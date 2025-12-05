let totalbox = document.querySelector(".clicks")
let resetbutton = document.querySelector(".resetbutton")
let boxes = document.querySelectorAll(".box")
let red = blue = green = total = 0
let redtext = document.querySelector(".redtext")
let bluetext = document.querySelector(".bluetext")
let greentext = document.querySelector(".greentext")

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.classList.contains("red")) {
            box.classList.replace("red", "blue")
            red++
            total++;
            updating()
            box.textContent = "BLUE"
        }
        else if (box.classList.contains("blue")) {
            box.classList.replace("blue", "green")
            blue++
            total++;
            updating()
            box.textContent = "GREEN"
        }
        else if (box.classList.contains("green")) {
            box.classList.replace("green", "red")
            green++
            total++;
            updating()
            box.textContent = "RED"

        }
    })
})

function updating() {

    totalbox.textContent = `Total Clicks : ${total}`
    redtext.textContent = `Red Clicks : ${red}`
    bluetext.textContent = `Blue Clicks : ${blue}`
    greentext.textContent = `Green Clicks : ${green}`
}

resetbutton.addEventListener("click", () => {
    red = blue = green = total = 0
    updating()
})
