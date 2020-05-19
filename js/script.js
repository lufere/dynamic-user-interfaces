let pageWidth = window.innerWidth;

let sections = ["Home", "News", "Sports", "Reel", "Worklife", "Travel", "Future", "Culture", "Music", "Tv", "Weather", "Sounds"];

// for (let section of sections){
for (let i = 0 ; i<5 ; i++){
    let categoryContainer = document.createElement("div");
    categoryContainer.classList.add("navItem");
    let categoryLink = document.createElement("a");
    categoryContainer.appendChild(categoryLink);
    categoryLink.innerHTML = sections[i];
    document.querySelector("header").appendChild(categoryContainer);
}
let dropdown = document.createElement("div");
dropdown.classList.add("dropdown");
let dropLabel = document.createElement("p");
dropLabel.innerHTML = "More";
dropLabel.classList.add("dropBtn");
let list = document.createElement("ul");
list.classList.add("hide");
let test = document.createElement("a");
test.innerHTML = "works";
list.appendChild(test);
dropdown.appendChild(dropLabel);
dropdown.appendChild(list);
document.querySelector("header").appendChild(dropdown);
// alert(window.innerWidth);

let menu = document.querySelector(".dropdown ul");


let dropBtn = document.querySelector(".dropBtn");
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
