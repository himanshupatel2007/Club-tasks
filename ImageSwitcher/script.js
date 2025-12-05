let jusmptolast = document.querySelector(".jumptolast")
let jumptofirst = document.querySelector(".jumptofirst")
let next = document.querySelector(".Next")
let previous = document.querySelector(".Previous")
let displaybox = document.querySelector(".imagebox")
let heading1 = document.querySelector("h3")


let images = [

    {
        id: 0, color: "red"
    },
    {
        id: 1, color: "green"
    },
    {
        id: 2, color: "blue"
    },
    {
        id: 3, color: "orange"
    },
    {
        id: 4, color: "purple"
    },
]

let counter = 0;

jumptofirst.addEventListener("click", () => {
    counter = 0;
    heading1.textContent = ""
    heading1.textContent = `Image ${counter + 1} of 5`
    displayimage(counter);
    checking(counter)
})


jusmptolast.addEventListener("click", () => {
    counter = 4;
    heading1.textContent = ""
    heading1.textContent = `Image ${counter + 1} of 5`
    displayimage(counter);
    checking(counter)
})


next.addEventListener("click", () => {
    counter++
    heading1.textContent = ""
    heading1.textContent = `Image ${counter + 1} of 5`
    displayimage(counter);
    checking(counter)
})


previous.addEventListener("click", () => {
    counter--
    heading1.textContent = ""
    heading1.textContent = `Image ${counter + 1} of 5`
    displayimage(counter);
    checking(counter)
})
function checking(counter) {
     previous.disabled =  false
     next.disabled = false
    if (counter == 0)
        previous.disabled =  true
    if (counter == 4)
        next.disabled = true
}

function displayimage(counter) {
    images.forEach(e => {
        if (e.id == counter)
            displaybox.classList.add(e.color)
        else
            displaybox.classList.remove(e.color)
    })
    checking(counter);
};


displayimage(counter);