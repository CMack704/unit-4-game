//-----------------------------


var wins = 0;
var losses = 0;
var score = 0;

$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(score);



$(document).ready(function(){
    var randomNumber = Math.floor(Math.random() * 39) + 1;
    var numOne = Math.floor(Math.random() * 9) + 1;
    var numTwo = Math.floor(Math.random() * 9) + 1;
    var numThree = Math.floor(Math.random() * 9) + 1;
    var numFour = Math.floor(Math.random() * 9) + 1;

    $("#pc-num").text(randomNumber);
    console.log(randomNumber);

    $("img").on("click", function() {
        score = score + numOne;
        score = score + numTwo;
        score = score + numThree;
        score = score + numFour;
    

        if  (score === randomNumber) {
            alert ("You win!");
            wins++;
            randomNumber = Math.floor(Math.random() * 39) + 1;
            numOne = Math.floor(Math.random() * 9) + 1;
            numTwo = Math.floor(Math.random() * 9) + 1;
            numThree = Math.floor(Math.random() * 9) + 1;
            numFour = Math.floor(Math.random() * 9) + 1;
            
        
        } else if (score >= randomNumber) {
            alert ("Sorry, you lost!");
            losses++;
            randomNumber = Math.floor(Math.random() * 39) + 1;
            numOne = Math.floor(Math.random() * 9) + 1;
            numTwo = Math.floor(Math.random() * 9) + 1;
            numThree = Math.floor(Math.random() * 9) + 1;
            numFour = Math.floor(Math.random() * 9) + 1;
        
        } else {

        }
    });


});

