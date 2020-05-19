let dropBtn = document.querySelector(".dropBtn");
let menu = document.querySelector(".dropdown ul")
dropdown = document.querySelector("dropdown")
dropBtn.addEventListener('mouseenter', function(){
    menu.classList.toggle("hide");
})

dropBtn.addEventListener('mouseleave', function(){
    menu.classList.toggle("hide");
})

menu.addEventListener('mouseleave', function(){
    menu.classList.toggle("hide");
})
