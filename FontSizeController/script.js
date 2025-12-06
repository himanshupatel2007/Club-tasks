let sizetext = document.querySelector("h3")
let increasebtn = document.querySelector(".increase")
let decreasebtn = document.querySelector(".decrease")
let rangeselector = document.querySelector("#myRange")

let resetbtn = document.querySelector(".resetbutton")
let mediumbtn = document.querySelector(".mediumbutton")
let largebtn = document.querySelector(".largebutton")
let smallbtn = document.querySelector(".smallbutton")

let texttochange = document.querySelector("p")
let current = 10

increasebtn.addEventListener("click", () => {
    current += 2;
    updating(current);
})
decreasebtn.addEventListener("click", () => {
    current -= 2;
    updating(current);
})

smallbtn.addEventListener("click", updating(14))
mediumbtn.addEventListener("click", updating(22))
largebtn.addEventListener("click", updating(28))
resetbtn.addEventListener("click", updating(16))
rangeselector.addEventListener("input", updating(rangeselector.value))


let updatedvalue;

function updating(updatedvalue) {
    current = updatedvalue;
    rangeselector.value = current
    texttochange.style.fontSize = current + "px"
    sizetext.textContent = `Current Size : ${current}`
    checking();
}

function checking() {
    increasebtn.disabled = false;
    decreasebtn.disabled = false;
    if (current == 40)
        increasebtn.disabled = true;
    if (current == 10)
        decreasebtn.disabled = true;
}

checking()
texttochange.style.fontSize = "10px"
