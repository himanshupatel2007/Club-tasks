let inputarea = document.querySelector("#inputtext")
let lowerarea = document.querySelector("#lowercase")
let upperarea = document.querySelector("#uppercase")

let characters = document.querySelector("h3")

let clearbtn = document.querySelector("#clearbutton")
let copylower = document.querySelector("#copylower")
let copyupper = document.querySelector("#copyupper")

let inputstring = ""

window.addEventListener("keydown", (event) => {

    if (event.key.length == 1) {
        if (event.key === "Backspace") {
            if (inputstring.length == 0)
                inputstring = "";
            else
                inputstring = inputstring.slice(0, -1);
        }
        else {
            inputstring += event.key
            inputarea.textContent = inputstring
            lowerarea.textContent = inputstring.toLowerCase()
            upperarea.textContent = inputstring.toUpperCase()
            inputarea.scrollTop = inputarea.scrollHeight;
            lowerarea.scrollTop = lowerarea.scrollHeight;
            upperarea.scrollTop = upperarea.scrollHeight;
            characters.textContent = `Total Characters : ${inputstring.length}`
        }
    }
})

clearbtn.addEventListener("click", () => {
    inputstring = ""
    inputarea.textContent = 'Start Typing....'
    lowerarea.textContent = inputstring.toLowerCase()
    upperarea.textContent = inputstring.toUpperCase()
    characters.textContent = `Total Characters : ${inputstring.length}`
})

copylower.addEventListener("click", () => {
    if (inputstring.length == 0)
        window.alert("Fisrtly enter the string!")
    else {
        let lower = inputstring.toLowerCase()
        navigator.clipboard.writeText(lower).then(() => {
            window.alert("Lower text copied!")
        })
    }
})
copyupper.addEventListener("click", () => {
    if (inputstring.length == 0)
        window.alert("Fisrtly enter the string!")
    else {
        let upper = inputstring.toUpperCase()
        navigator.clipboard.writeText(upper).then(() => {
            window.alert("Upper text copied!")
        })
    }
})