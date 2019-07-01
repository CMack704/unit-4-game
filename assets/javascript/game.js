//-----------------------------

var numbers = ["30", "31", "32", "33", "34","35", "36", "37", "38", "39"]
var wins = 0;
var losses = 0;
var score = 0;
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var scoreText = document.getElementById("score");
var randomNumberText = document.getElementById("random-number");
var randomNumber = Math.floor(Math.random() * 39) + 1;
var crystalValue = Math.floor(Math.random() * 9) + 1;

$("#pc-num").text(randomNumber);
console.log(randomNumber);


$(document).ready(function(){
    

    if  (score === randomNumber) {
        wins++;

    } else if (score >= randomNumber) {
        losses++;
    } else {

    }



});

