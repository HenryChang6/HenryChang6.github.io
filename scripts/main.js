// /*
// function handleClick() {
// alert('hey stop clicking dude')
// }
// document.querySelector('html').onclick = handleClick;
// */

// /*
// document.querySelector('html').onclick = function() {
//     alert('hey syo[ clicking dude');
// }
// */
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === 'images/Basketball_Player.png') {
//         myImage.setAttribute('src', 'images/test.JPG');
//     } else {
//         myImage.setAttribute('src', 'images/Basketball_Player.png');
//     }
// }
// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     if (!myName || myName === null) {
//         setUserName();
//     } else {
//         localStorage.setItem('name', myName);
//     }
//     //myHeading.innerHTML = 'Hi ' + myName + ' ,Welcome to my website!';
// }

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.innerHTML = 'Hi ' + storedName + ' ,Welcome to my website!';
// }

// myButton.onclick = function() {
//     setUserName();
// }

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}