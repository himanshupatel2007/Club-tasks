const outputbox = document.querySelector(".output")
const selector = document.querySelector("#options")
const clearbtn = document.querySelector("#clearbutton")


let count = 0;


selector.addEventListener("change", (event) => {
    switch (event.target.value) {
        case "1": display("Success", "✅ Operation successful!", " 4px solid rgb(108, 154, 255)")
            break;
        case "2": display("Warning", "⚠️ Please review your input", "4px solid rgba(255, 162, 0, 1)")
            break;
        case "3": display("Error", "❌ Something went wrong", "4px solid rgba(255, 93, 93, 1)")
            break;
        case "4": display("Information", "ℹ️ Here's some information", "4px solid rgba(255, 233, 35, 1)")
            break;
        default: clearbtn.click();
            break;
    }
})



function display(...arr) {
    outputbox.classList.remove("hide")
    outputbox.style.border = arr[2];
    outputbox.innerHTML = ` <h3>${arr[0]}</h3>
                            <p>${arr[1]}</p> `

    count++;
    document.querySelector("h2").innerHTML = `Message Shown = ${count}`
}

clearbtn.addEventListener("click",() => {
    outputbox.classList.add("hide")
    outputbox.innerHTML = "";
    count = 0;
    document.querySelector("h2").innerHTML = `Message Shown = 0`
    selector.value = "0"

})