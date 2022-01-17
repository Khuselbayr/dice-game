//тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 1;

// тоглогчийн цуглуулсан оноог хадгалах хувьсагч
 var score= [0,0];

 // тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
 var roundscore = 0;




//document.querySelector("#score-0").textContent = dice;

//document.querySelector("#score-1").textContent = dice;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;


document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display="none";


document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display="block";
    diceDom.src = "dice-" + diceNumber + ".png";
  
});

