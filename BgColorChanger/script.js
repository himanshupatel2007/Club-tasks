
let value = last = current = color = passing = passed =  ""
let themeclass = document.querySelector("#themetoggle")
let buttons = document.querySelectorAll("button")
let favourite = document.querySelector(".setfavourite")
let applyfavourite = document.querySelector(".applyfavourite")
let currentcolor = document.querySelector("#currentcolor")
let lastcolor = document.querySelector("#lastcolor")
let randombutton = document.querySelector(".randomstyle")


let arr = [
    {
        id : "one.css" ,value :0 
    },
    {
        id : "two.css" ,value :1
    },
    {
        id : "three.css" ,value :2
    },
    {
        id : "four.css" ,value :3 
    },
    {
        id : "five.css" ,value :4
    },
    {
        id : "six.css" ,value :5
    },
    {
        id : "seven.css" ,value :6
    }
]


function identifying(value,color) {
    last = current;
    current = color
    themeclass.href = value;
    favourite.classList.remove("hideit")
    lastcolor.textContent = `Last Color : ${last}`
    currentcolor.textContent = `Current Color : ${current}`
    buttons.forEach(element => {
        if(element.classList.contains(value))
            element.classList.add("clicked")
        else
            element.classList.remove("clicked")
        
    });
}


favourite.addEventListener("click", () => {
    localStorage.setItem("fav", themeclass.href);
    if (localStorage.getItem("fav")) 
        applyfavourite.classList.remove("hideit")
})


applyfavourite.addEventListener("click", () => {
    
    let savedvalue = localStorage.getItem("fav")
    themeclass.href = savedvalue;
})



randombutton.addEventListener("click", ()=>{
    let random = Math.floor(Math.random() * 7)
    arr.forEach(e=>{
        if(e.value == random)
          passed = e.id;
    })
    let classes ;
    buttons.forEach(e =>{
      if(e.classList.contains(passed))
        classes = e.textContent
    })
    identifying(passed,classes)
})