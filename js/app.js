'use strict';
var corrAns = 0;
var incorrAns = 0;

// Ask for the users name
function userName() {
    var user = prompt('Hi! What is your name?');
    // Greet the user
    alert('Hello ' + user + ', welcome to my guessing game! Lets see if you really know me.');
    // Log that interaction to console
    console.log('The user answered ' + userName);
}
// Ask the first guessing game question
function question1() {
    var answer1 = prompt('Do you think I have any siblings?').toLowerCase();
    if (answer1 === 'yes' || answer1 === 'y') {
        alert('That is correct! I have a sister.');
        console.log('The user got the correct answer to #1, which is yes');
        corrAns++;
    } else {
        alert('Sorry, that is incorrect, I have a sister.');
        console.log('The user got the answer wrong to #1');
        incorrAns++;
    }
}
// 2nd question
function question2() {
    var answer2 = prompt('Do you think I grew up in Washington?').toLowerCase();
    if (answer2 === 'yes' || answer2 === 'y') {
        alert('That is correct! I grew up in Renton, WA.');
        console.log('The user got the answer to #2 correct, which is yes');
        corrAns++;
    } else {
        alert('Sorry, that is incorrect');
        console.log('The user got the answer to #2 incorrect');
        incorrAns++;
    }
}
// 3rd question
function question3() {
    var answer3 = prompt('Do you think I like snowboarding?').toLowerCase();
    if (answer3 === 'yes' || answer3 === 'y') {
        alert('That is correct! I started snowboarding when I was 8 years old and its where I first fell in love with the mountains.');
        console.log('The user got the answer to #3 correct, which is no');
        corrAns++;
    } else {
        alert('Sorry, thats incorrect, I have been snowboarding since I was 8 years old!');
        console.log('The user got the answer to #3 incorrect');
        incorrAns++;
    }
}
// 4th question
function question4() {
    var answer4 = prompt('Do you think I have any tattoos?').toLowerCase();
    if (answer4 === 'yes' || answer4 === 'y') {
        alert('Thats correct! I have 5 and hopefully even more soon!');
        console.log('The user got the answer to #4 correct, which is yes');
        corrAns++;
    } else {
        alert('Sorry, that is incorrect, I have 5 tattoos and I plan on getting lots more!');
        console.log('The user got the answer to #4 incorrect');
        incorrAns++;
    }
}
// 5th question
function question5() {
    var answer5 = prompt('Do you think I like country music?').toLowerCase();
    if (answer5 === 'no' || answer5 === 'n') {
        alert('Thats correct, I dabble in audio engineering and love most music but country music is one of the only genres I cant stand!');
        console.log('The user got the answer to #5 correct, which is no');
        corrAns++;
    } else {
        alert('Sorry, but thats incorrect, as an audio engineer, I refused to record country music because I cannot stand it.');
        console.log('The user got the answer incorrect');
        incorrAns++;
    }
}
// 6th question (number guess)
function question6() {
    var counterQ6 = 4;
    var userWrong = true;
    // Begin loop
    while(counterQ6 > 0 && userWrong === true) {
        var answer6 = prompt('How many states do you think I have lived in? You have 4 chances to get it right').toLowerCase();
        // For correct answer
        if(answer6 === '3') {
            alert('Wow, nice guess! I have lived in Washington, Cali, and Hawaii');
            console.log('The user got the answer to #6 correct');
            userWrong = false;
            corrAns++;
        }
        // If answer is too low
        else if(answer6 < '3') {
            alert('Sorry, thats a little low! You have ' + counterQ6 + ' tries left.');
            console.log('The user answered ' + answer6 + ' for Q6 which is incorrect');
        } 
        // If answer is too high
        else if(answer6 > '3') {
            alert('Sorry, thats a little high! You have ' + counterQ6 + ' tries left.');
            console.log('The user answered ' + answer6 + ' for Q6 which is incorrect');
        }
        counterQ6--; 
        // Statement to end loop
        if(counterQ6 === 0 && answer6 !== 3) {
            alert('Sorry, you ran out of guesses! The correct answer was 3, WA, CA, and HI');
            console.log('The user ran out of guesses without getting the correct answer');
            incorrAns++;
        }
    }
}
// 7th question (array)
function question7() {
    var arrayAnswers = ['thai', 'pizza', 'pho', 'burritos', 'steak'];
    var wrongGuesses = 1;

    // Begin loop
    while(wrongGuesses < 6) {
        var answer7 = prompt('Can you guess one of my favorite foods? You will have 6 tries to get one of them').toLowerCase();  
            
            // If answered correctly
            if(arrayAnswers.includes(answer7) === true) {
                alert('Nicely done! But then again, everyone loves ' + answer7 + ' right?');
                console.log('The user answered #7 correctly in ' + wrongGuesses + ' guesses');
                corrAns++;
                break;
            }  
            // If answered incorrectly
            else {
                alert('Thats not one of my faves! Keep trying though since you have only used ' + wrongGuesses + ' guesses');
                console.log('The user answered #7 incorrectly they have used ' + wrongGuesses + ' guesses');
                wrongGuesses++;
        }

    }
     // End loop

     if(numGuesses === 0) {
        alert('Sorry you ran out of guesses! Better luck next time');
        console.log('The user ran out of guesses for #7');
        incorrAns++;
    }
};

// Function Call:
userName();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
endMsg();

function engMsg() {
    // Final message
    alert('Thanks for playing! You got ' + corrAns + ' answers correct and ' + incorrAns + ' answers wrong.');
};