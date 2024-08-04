const welcome = ["Hi,", "My", "name", "is", "Vinoth.", "I", "make", "websites", "that", "look", "Great."];
document.querySelector('h1').style.color = "white";
let counter = 0;
let intervalID = setInterval(function () {
    document.querySelector('h1').innerHTML = welcome[counter];
    counter++;
    if (counter > (welcome.length - 1)) {
        counter = 0;
    }
}, 500);
const bottomNavbar = document.querySelector('.bottomNavbar');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const pause = document.querySelector('#pause');
const menu = document.querySelector('#menu');
const secondContainer = document.querySelector('#secondContainer');
const card = document.querySelectorAll('.card');
const message = document.querySelector('#message');
bottomNavbar.addEventListener("click", () => {
    bottomNavbar.style.left = "5%";
    bottomNavbar.style.width = "90%";
    home.style.display = "block";
    about.style.display = "block";
    contact.style.display = "block";
    pause.style.display = "none";
    menu.style.display = "flex";
    menu.style.opacity = '1';
})
home.addEventListener("mouseover", () => {
    home.style.backgroundColor = "white";
    home.style.color = "rgb(222 0 18)";
    home.style.borderRadius = "20px";
})
about.addEventListener("mouseover", () => {
    about.style.backgroundColor = "white";
    about.style.color = "rgb(222 0 18)";
    about.style.borderRadius = "20px";
})
contact.addEventListener("mouseover", () => {
    contact.style.backgroundColor = "white";
    contact.style.color = "rgb(222 0 18)";
    contact.style.borderRadius = "20px";
})
home.addEventListener("mouseleave", () => {
    home.style.backgroundColor = "rgb(222 0 18)";
    home.style.color = "white";
    home.style.borderRadius = "20px";
})
about.addEventListener("mouseleave", () => {
    about.style.backgroundColor = "rgb(222 0 18)";
    about.style.color = "white";
    about.style.borderRadius = "20px";
})
contact.addEventListener("mouseleave", () => {
    contact.style.backgroundColor = "rgb(222 0 18)";
    contact.style.color = "white";
    contact.style.borderRadius = "20px";
})
bottomNavbar.addEventListener("mouseleave", () => {
    home.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    pause.style.display = "block";
    menu.style.display = "flex";
    bottomNavbar.style.width = "220px";
    bottomNavbar.style.left = "43%";
    // menu.style.opacity = '1';
})
secondContainer.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let latestX = x / 15;
    let latestY = y / 15;
    card[0].style.transform = "translate(" + -latestX + "px" + "," + -latestY + "px)";
    card[1].style.transform = "translate(" + -latestX + "px" + "," + -latestY + "px)";
    message.style.transform = "translate(" + +latestX + "px" + "," + +latestY + "px)";
});
window.addEventListener("scroll", function () {
    let currentPos = Math.floor(window.scrollY);
    if (currentPos > 2800) {
        bottomNavbar.style.transform = "translateY(1000px)";
    }
    else {
        bottomNavbar.style.transform = "translateY(0px)";
    }
});