let markall = document.querySelector("#markall")
let unmarkall = document.querySelector("#unmarkall")
let lists = document.querySelectorAll("li")
let completed = document.querySelector("h3")
let progress = document.querySelector("progress")
let completedtask = percent = 0
let per = document.querySelector("span")

markall.addEventListener("click", () => {
    lists.forEach(e => {
        e.classList.add("donetask")
    })
    completedtask = 5
    percent = 100
    completed.textContent = `Completed : ${completedtask}/5`
    progress.value = completedtask
    per.textContent = `${percent}%`
})

lists.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("donetask")
        if (e.classList.contains("donetask")) {
            completedtask++
            percent += 20
        }
        else {
            completedtask--
            percent -= 20
        }
        completed.textContent = `Completed : ${completedtask}/5`
        progress.value = completedtask
        per.textContent = `${percent}%`
    })
})



unmarkall.addEventListener("click", () => {
    lists.forEach(e => {
        e.classList.remove("donetask")
    })
    completedtask = 0
    percent = 0
    completed.textContent = `Completed : ${completedtask}/5`
    progress.value = completedtask
    per.textContent = `${percent}%`
})