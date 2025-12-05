let showall = document.querySelector(".showall")
let showbio = document.querySelector(".showbio")
let showskills = document.querySelector(".showskills")
let showhobby = document.querySelector(".showhobby")
let hideall = document.querySelector(".hideall")
let visible = 0
let sections = document.querySelectorAll(".box")
let bio = document.querySelector(".bio")
let skills = document.querySelector(".skills")
let hobby = document.querySelector(".hobby")
let heading = document.querySelector("h3")

hideall.addEventListener("click", () => {

    sections.forEach(e => {
        e.classList.add("hide")
    })
    showskills.textContent = "SHOW SKILLS"
    showbio.textContent = "SHOW BIO"
    showhobby.textContent = "SHOW HOBBY"
    visible = 0
    heading.textContent = `Sections Visible : ${visible}`
})
showall.addEventListener("click", () => {

    sections.forEach(e => {
        e.classList.remove("hide")
    })
    visible = 3
    showskills.textContent = "HIDE SKILLS"
    showbio.textContent = "HIDE BIO"
    showhobby.textContent = "HIDE HOBBY"
    heading.textContent = `Sections Visible : ${visible}`
})

showbio.addEventListener("click", () => {

    if (showbio.textContent === "SHOW BIO") {
        bio.classList.remove("hide")
        showbio.classList.add("clicked")
        showbio.textContent = "HIDE BIO"
        visible++;
    }
    else {
        bio.classList.add("hide")
        showbio.classList.remove("clicked")
        showbio.textContent = "SHOW BIO"
        visible--;
    }
    heading.textContent = `Sections Visible : ${visible}`
})

showhobby.addEventListener("click", () => {

    if (showhobby.textContent === "SHOW HOBBY") {
        hobby.classList.remove("hide")
        showhobby.classList.add("clicked")
        showhobby.textContent = "HIDE HOBBY"
        visible++;
    }
    else {
        hobby.classList.add("hide")
        showhobby.classList.remove("clicked")
        showhobby.textContent = "SHOW HOBBY"
        visible--;
    }
    heading.textContent = `Sections Visible : ${visible}`
})

showskills.addEventListener("click", () => {

     if (showskills.textContent === "SHOW SKILLS") {
        skills.classList.remove("hide")
        showskills.classList.add("clicked")
        showskills.textContent = "HIDE SKILLS"
        visible++;
    }
    else {
        skills.classList.add("hide")
        showskills.classList.remove("clicked")
        showskills.textContent = "SHOW SKILLS"
        visible--;
    }
    heading.textContent = `Sections Visible : ${visible}`
})