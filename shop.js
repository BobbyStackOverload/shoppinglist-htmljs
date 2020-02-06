"use strict";

const getUserInputButton = document.querySelector("#MakeMyList")
const    userInputs = document.querySelectorAll(".userInput");
const     myListDiv = document.querySelector('#myList');

function getUserInput(list) {
    userInputs.forEach(function(userInput){
        const newText = document.createElement('p');
        document.body.appendChild(newText);
        newText.innerHTML += userInput.value;
    });
}
getUserInputButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('clicked');
    console.log(userInputs);
    // userInputs.forEach(function(input) {
        // console.log(input.value);
    getUserInput(); 
});
    // }


