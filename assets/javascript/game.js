// first we will generate a random letter via computer
//iniitzle variables
//then user presses key 
// to store users key in variable 
//then we will use if/else statement based on the condition 

//if user will run out of guesses then they will lose 
//loses will increase by one
//guesses left will reset 
//your guesses so far will rest 

//else 
////if computer generates random letter, and user picks same letter this is a win 
//increase wins by one 
//reset guesses left and your guesses so far
//if the users letter does not match
//then we will guesses left decreases by one 
//your guesses so far will update with the users guess
//document.getElementbyID-to update html
//iniitzle variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessFar = [];




var alphabet = "abcdefghijklmnopqrstuvwxyz";



function newgame(){
	 getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(getRandomLetter);
}

newgame();

document.onkeyup = function(event) {
        var key = event.key.toLowerCase();
        console.log(key);


        if (guesses === 0) {
            losses++;
            guesses = 9;
            guessFar = [];
            newgame();


        } else {
            if (getRandomLetter === key) {
                wins++;
                guesses = 9;
                guessFar = [];
                newgame();
                }



                else {
                    guesses --;
                  	guessFar.push(key);


                }
            }


    var display = document.getElementById("Game"); //javascript 

    var html =
        "<h2 id= 'Game'>Wins: =" + wins + "<br/>" +
        "losses =" + losses + "<br/>" +
        "guesses =" + guesses + "<br/>" +
        "guesses so Far=" + guessFar + "<br/></h2>";

    display.innerHTML= html;  
 
 }