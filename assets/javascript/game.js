//-----------------------------


var wins = 0;
var losses = 0;
var score = 0;


$(document).ready(function(){
    var randomNumber = Math.floor(Math.random() * 39) + 1;
    var blue = Math.floor(Math.random() * 9) + 1;
    var clear = Math.floor(Math.random() * 9) + 1;
    var green = Math.floor(Math.random() * 9) + 1;
    var purple = Math.floor(Math.random() * 9) + 1;
    $("#pc-num").text(randomNumber);   
    console.log(randomNumber);


    blue = Math.floor(Math.random() * 9) + 1;
    clear = Math.floor(Math.random() * 9) + 1;
    green = Math.floor(Math.random() * 9) + 1;
    purple = Math.floor(Math.random() * 9) + 1;

    $("#blue").on("click", function(){
        score = score + blue;
        $("#score").text(score);
        console.log(score);
        if  (score === randomNumber) {
            alert ("You win!");
            wins++;
            $("#wins").text(wins);
            $("#score").text(score = 0);
            randomNumber = Math.floor(Math.random() * 39) + 1;
            blue = Math.floor(Math.random() * 9) + 1;
            clear = Math.floor(Math.random() * 9) + 1;
            green = Math.floor(Math.random() * 9) + 1;
            purple = Math.floor(Math.random() * 9) + 1;
            $("#pc-num").text(randomNumber);
        } else if (score >= randomNumber) {
            alert ("Sorry, you lost!");
            losses++;
            $("#losses").text(losses);
            $("#score").text(score = 0);
            randomNumber = Math.floor(Math.random() * 39) + 1;
            blue = Math.floor(Math.random() * 9) + 1;
            clear = Math.floor(Math.random() * 9) + 1;
            green = Math.floor(Math.random() * 9) + 1;
            purple = Math.floor(Math.random() * 9) + 1;
            $("#pc-num").text(randomNumber);
        } else {
    
        }
    })
    $("#clear").on("click", function(){
        score = score + clear;
        $("#score").text(score);
        console.log(score);
        if  (score === randomNumber) {
            alert ("You win!");
            wins++;
            $("#wins").text(wins);
            $("#score").text(score = 0);
            randomNumber = Math.floor(Math.random() * 39) + 1;
            blue = Math.floor(Math.random() * 9) + 1;
            clear = Math.floor(Math.random() * 9) + 1;
            green = Math.floor(Math.random() * 9) + 1;
            purple = Math.floor(Math.random() * 9) + 1;
            $("#pc-num").text(randomNumber);    
        } else if (score >= randomNumber) {
            alert ("Sorry, you lost!");
            losses++;
            $("#losses").text(losses);
            $("#score").text(score = 0);
            randomNumber = Math.floor(Math.random() * 39) + 1;
            blue = Math.floor(Math.random() * 9) + 1;
            clear = Math.floor(Math.random() * 9) + 1;
            green = Math.floor(Math.random() * 9) + 1;
            purple = Math.floor(Math.random() * 9) + 1;
            $("#pc-num").text(randomNumber);
        } else {
    
        }
    })
    $("#green").on("click", function(){
        score = score + green;
        $("#score").text(score);
        console.log(score);
        if  (score === randomNumber) {
            alert ("You win!");
            wins++;
            $("#wins").text(wins);
            $("#score").text(score = 0);
            randomNumber = Math.floor(Math.random() * 39) + 1;
            blue = Math.floor(Math.random() * 9) + 1;
            clear = Math.floor(Math.random() * 9) + 1;
            green = Math.floor(Math.random() * 9) + 1;
            purple = Math.floor(Math.random() * 9) + 1;
            $("#pc-num").text(randomNumber);  
        } else if (score >= randomNumber) {
            alert ("Sorry, you lost!");
            losses++;
            $("#losses").text(losses);
            $("#score").text(score = 0);
            randomNumber = Math.floor(Math.random() * 39) + 1;
            blue = Math.floor(Math.random() * 9) + 1;
            clear = Math.floor(Math.random() * 9) + 1;
            green = Math.floor(Math.random() * 9) + 1;
            purple = Math.floor(Math.random() * 9) + 1;
            $("#pc-num").text(randomNumber);  
        } else {
    
        }
    })
    $("#purple").on("click", function(){
        score = score + purple;
        $("#score").text(score);
        console.log(score);
        if  (score === randomNumber) {
            alert ("You win!");
            wins++;
            $("#wins").text(wins);
            $("#score").text(score = 0);
            randomNumber = Math.floor(Math.random() * 39) + 1;
            blue = Math.floor(Math.random() * 9) + 1;
            clear = Math.floor(Math.random() * 9) + 1;
            green = Math.floor(Math.random() * 9) + 1;
            purple = Math.floor(Math.random() * 9) + 1;
            $("#pc-num").text(randomNumber);  
        } else if (score >= randomNumber) {
            alert ("Sorry, you lost!");
            losses++;
            $("#losses").text(losses);
            $("#score").text(score = 0);
            randomNumber = Math.floor(Math.random() * 39) + 1;
            blue = Math.floor(Math.random() * 9) + 1;
            clear = Math.floor(Math.random() * 9) + 1;
            green = Math.floor(Math.random() * 9) + 1;
            purple = Math.floor(Math.random() * 9) + 1;
            $("#pc-num").text(randomNumber);
        } else {
    
        }
    })






});

