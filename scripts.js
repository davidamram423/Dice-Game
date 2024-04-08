var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1-6

var randomDiceImg1 = "images/dice" + randomNumber1 + ".png"; // Randomly selecting which image to choose from

var image1 = document.querySelectorAll("img")[0]; //Targetting the first die

image1.setAttribute("src", randomDiceImg1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!!"
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!!"
}

else{
    document.querySelector("h1").innerHTML = "Tie Game!!!"
}