'use strict';

// Ask for the users name
var userName = prompt('Hi! What is your name?');

// Greet the user
alert('Hello, ' + userName + ' , welcome!');

// Log that interaction to console
console.log('The user answered ' + userName);

// Ask the first guessing game question
var answer1 = prompt('Do you think I have any siblings?').toLowerCase();
// User guesses "yes/no"
if (answer1 === 'yes' || answer1 === 'y') {
    alert('That is correct');
    console.log('The user got the correct answer to #1, which is yes');
} else {
    alert('Sorry, that is incorrect');
    console.log('The user got the answer wrong to #1');
}

// Tell user if they are wrong or right

// Next question