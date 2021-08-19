/**
 * Try to manipulate the page
 * 
 * Easiest
 * 1) Get the title for each dog/cat services, and put them into the console using console.log
 * 2) Change the title of the page to "We're the CAT People"
 * 3) Change the main image to be something cat related.
 * 
 * 
 * Harder
 * 1) Replace the call to action button background color with "red"
 * 2) Find another image and replace the header (try unsplash.com, get familiar with searching for images)
 * 3) When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"
 * 
 * 
 * Hardest (only if you get the others first)
 * 1) Make the responsive menu work!
 * 2) Implement a modal window - "Sign up now" CTA when someone clicks the 'Sign Up' button
 */

/***EASIEST*/

// Change the title of the page to "We're the CAT People"

let title = document.querySelector("#heroC")
title.innerHTML = "<h1>We're the CAT People</h1><h3>Book trusted, local pet sitters and walkers who will care cat like you would</h3><button class=btn>Search</button>"

let im = document.querySelector("#newImg");
im.src = "img/cat.jpg";
im.style.width = "80px"
im.style.height = "50px"
im.style.padding = "10px"


//Replace the call to action button background color with "red"
let buttonCol = document.querySelector(".btn")
buttonCol.addEventListener('click', () =>
    buttonCol.style.backgroundColor = 'red'
)

//Find another image and replace the header (try unsplash.com, get familiar with searching for images)
// document.querySelector("#imBg").addEventListener("click", function() {
//     //callback functions
//     let bgImg = document.querySelector(".hero_container")
//     bgImg.style.backgroundImage = "url('https://uk.catinaflat.com/static/imgs/share-3b2aa7f0.jpg')"
// })

//  When someone clicks the "Book your next Rover sitter" button, change the text of the button to say "Thanks"

function mDown(obj) {
    obj.style.backgroundColor = "#5F7A61";
    obj.innerHTML = "Thank You";
}

//JS SIGN UP
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}


// Get DOM Elements NAV BAR
const modal = document.querySelector('#mobile_menu');
const modalBtn = document.querySelector('#bars');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}