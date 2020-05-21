
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

let ferrets = [...document.querySelectorAll(".ferretImg")];
console.log(ferrets);
let circles = [...document.querySelectorAll(".navButton")];
console.log(circles);

let ferretIndex = 0;

function showFerret(){
    ferrets.forEach(element => element.classList.add("hide"));
    if (ferretIndex == ferrets.length) ferretIndex = 0;
    if (ferretIndex < 0) ferretIndex = ferrets.length-1;
    ferrets[ferretIndex].classList.remove("hide");
    circles.forEach(circle => circle.style.backgroundColor = "transparent");
    circles[ferretIndex].style.backgroundColor = "goldenrod";
}

// circles.forEach(circle => circle.addEventListener('click', function(e){
//     alert (circle);
// }))

// for (i=0 ; i<circles.length - 1; i++){
//     circles[i].addEventListener('click', function(){
//         ferretIndex = i;
//         showFerret();
//     })
// }

circles[0].addEventListener('click', function(){
    ferretIndex = 0;
    showFerret();
    clearTimeout(time);
    time = setTimeout(advance, 5000);
})

circles[1].addEventListener('click', function(){
    ferretIndex = 1;
    showFerret();
    clearTimeout(time);
    time = setTimeout(advance, 5000);
})

circles[2].addEventListener('click', function(){
    ferretIndex = 2;
    showFerret();
    clearTimeout(time);
    time = setTimeout(advance, 5000);
})

circles[3].addEventListener('click', function(){
    ferretIndex = 3;
    showFerret();
    clearTimeout(time);
    time = setTimeout(advance, 5000);
})

circles[4].addEventListener('click', function(){
    ferretIndex = 4;
    showFerret();
    clearTimeout(time);
    time = setTimeout(advance, 5000);
})

function advance(){
    ferretIndex += 1
    showFerret();
    clearTimeout(time);
    time = setTimeout(advance, 5000);
}

function rewind(){
    ferretIndex -= 1
    showFerret();
    clearTimeout(time);
    time = setTimeout(advance, 5000);
}

let leftArrow = document.querySelector("#arrowLeft");
let rightArrow = document.querySelector("#arrowRight");

leftArrow.addEventListener('click', rewind)

rightArrow.addEventListener('click', advance)
showFerret();

let time = setTimeout(advance, 5000);
// setInterval(advance, 5000)