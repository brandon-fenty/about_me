'use strict';

// Ask for the users name
var userName = prompt('Hi! What is your name?');

// Greet the user
alert('Hello ' + userName + ', welcome to my guessing game! Lets see if you really know me.');

// Log that interaction to console
console.log('The user answered ' + userName);

// Ask the first guessing game question
var answer1 = prompt('Do you think I have any siblings?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
    alert('That is correct! I have a sister.');
    console.log('The user got the correct answer to #1, which is yes');
} else {
    alert('Sorry, that is incorrect, I have a sister.');
    console.log('The user got the answer wrong to #1');
}

// 2nd question
var answer2 = prompt('Do you think I grew up in Washington?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
    alert('That is correct! I grew up in Renton, WA.');
    console.log('The user got the answer to #2 correct, which is yes');
} else {
    alert('Sorry, that is incorrect');
    console.log('The user got the answer to #2 incorrect');
}

// 3rd question
var answer3 = prompt('Do you think I like snowboarding?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
    alert('That is correct! I started snowboarding when I was 8 years old and its where I first fell in love with the mountains.');
    console.log('The user got the answer to #3 correct, which is no');
} else {
    alert('Sorry, thats incorrect, I have been snowboarding since I was 8 years old!');
    console.log('The user got the answer to #3 incorrect');
}

// 4th question
var answer4 = prompt('Do you think I have any tattoos?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'y') {
    alert('Thats correct! I have 5 and hopefully even more soon!');
    console.log('The user got the answer to #4 correct, which is yes');
} else {
    alert('Sorry, that is incorrect, I have 5 tattoos and I plan on getting lots more!');
    console.log('The user got the answer to #4 incorrect');
}

// 5th question
var answer5 = prompt('Do you think I like country music?').toLowerCase();
if (answer5 === 'no' || answer5 === 'n') {
    alert('Thats correct, I dabble in audio engineering and love most music but country music is one of the only genres I cant stand!');
    console.log('The user got the answer correct, which is no');
} else {
    alert('Sorry, but thats incorrect, as an audio engineer, I refused to record country music because I cannot stand it.');
    console.log('The user got the answer incorrect')
}
