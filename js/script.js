
let sections = ["Home", "News", "Sports", "Reel", "Worklife", "Travel", "Future", "Culture", "Music", "Tv", "Weather", "Sounds"];


// for (let section of sections){

function renderNav(){
document.querySelector("header").innerHTML = "";
let pageWidth = window.innerWidth;
let navWidth = pageWidth - (pageWidth*0.4);
let showQty = Math.floor(navWidth/100);
// alert(navWidth);
if (showQty > 9) showQty = 9;
if (showQty < 1) showQty = 1;
// alert(showQty);  
    for (let i = 0 ; i<showQty ; i++){
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
    for (let i = showQty ; i<sections.length ; i++){
        let test = document.createElement("a");
        test.innerHTML = sections[i];
        list.appendChild(test);
    }
    dropdown.appendChild(dropLabel);
    dropdown.appendChild(list);
    document.querySelector("header").appendChild(dropdown);
    // alert(window.innerWidth);
    setListeners();
}

function setListeners(){
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

}

renderNav();
window.addEventListener('resize', renderNav);
