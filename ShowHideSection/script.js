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
    bio.classList.toggle("hide")

    if (bio.classList.contains("hide")) {
        showbio.classList.add("clicked")
        showbio.textContent = "HIDE BIO"
        visible++;
    }
    else {
        showbio.classList.remove("clicked")
        visible--
        showbio.textContent = "SHOW BIO"
    }
    heading.textContent = `Sections Visible : ${visible}`
})

showhobby.addEventListener("click", () => {
    hobby.classList.toggle("hide")

    if (bio.classList.contains("hide")) {
        showhobby.classList.add("clicked")
        showhobby.textContent = "HIDE HOBBY"
        visible++;
    }
    else {
        showhobby.classList.remove("clicked")
        visible--
        showhobby.textContent = "SHOW HOBBY"
    }
    heading.textContent = `Sections Visible : ${visible}`
})

showskills.addEventListener("click", () => {
    skills.classList.toggle("hide")

    if (skills.classList.contains("hide")) {
        showskills.classList.add("clicked")
        showskills.textContent = "HIDE SKILLS"
        visible++;
    }
    else {
        showskills.classList.remove("clicked")
        visible--
        showskills.textContent = "SHOW SKILLS"
    }
    heading.textContent = `Sections Visible : ${visible}`
})