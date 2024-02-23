// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("body").style.border = "2px black solid";
// document.getElementById("mouth").style.borderRadius = "4px";
"use strict";

// document.getElementById("lefteye").style.backgroundColor = "purple";

// document.getElementById("head").style.transform = "rotate(345deg)";

// document.getElementById("body").style.border = "4px solid #000000";

// document.getElementById("body").style.borderRadius = "4px";

// document.getElementById("righteye").style.border = "4px black dotted";
// document.getElementById("lefteye").style.border = "4px black dotted";

// // document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

// document.getElementById("body").style.color = "#FF0000";

// document.getElementById("head").style.borderTop = "5px black solid";

// document.getElementById("nose").style.borderRadius = "50%";

// // document.getElementById("rightarm").style.backgroundColor = "green";

// document.getElementById("mouth").style.border = "4px black solid";

//ANIMATING THE ROBOT

// getElementById("righteye").onclick = moveUpDown; 
let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);
let leftEye = document.getElementById("lefteye");
leftEye.onclick = moveUpDown;
let nose = document.getElementById("nose");
nose.onclick = moveNoseUpDown;
let leftArm = document.getElementById("leftarm");
leftArm.onclick = moveRightLeft;
let mouth = document.getElementById("mouth");
mouth.onclick = moveMouthUpDown;

function moveUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame, 100);
    function frame() {
        robotPart.style.top = t++ + "%";
        if (t === 21) {
            clearInterval(animation);
        }
    }
}

function moveNoseUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame, 100);
    function frame() {
        robotPart.style.top = t++ + "%";
        if (t === 51) {
            clearInterval(animation);
        }
    }
}

function moveRightLeft(event) {
    let robotPart = event.target;
    let left = 0;
    let animation = setInterval(frame, 100);
    function frame() {
        robotPart.style.left = left++ + "%";
        if (left === 71) {
            clearInterval(animation);
        }
    }
}

function moveMouthUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame, 100);
    function frame() {
        robotPart.style.top = t++ + "%";
        if (t === 71) {
            clearInterval(animation);
        }
    }
}

