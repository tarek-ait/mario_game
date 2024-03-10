let currentMoleTile;
let currentPlantTile;
const button1=document.querySelector('#start-button');
const button2=document.querySelector('#restart-button');
const gameScore=document.querySelector('#score');
const game=document.querySelector('#game');
let score = 0;
let gameOver=false;
window.onload = function(){
    setGame();
}

button1.onclick=startGame;
button2.onclick=restartGame;

 
function startGame(){
    game.style.display="flex";
    gameScore.style.display="block";
    button1.style.margin="1rem";
  
}


function restartGame(){
    gameOver=false;
    score=0;
    button2.style.display="none";
    document.getElementById("score").innerText="SCORE : "+score.toString();
}
function setGame(){
        for (let i = 0; i < 9; i++){
            let tile=document.createElement("div");
            tile.id=i.toString();
            tile.addEventListener("click", selectTile);
            document.getElementById("board").appendChild(tile);
    }
   let speed = 1000;
   let scor=score / 50;
   if (scor>=1){
    speed=speed*scor;
   }
    setInterval(setMole,speed);
    setInterval(setPlant,speed);
}
    
function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setPlant(){
    if (gameOver){
        return;
    }
    if (currentPlantTile){ 
        currentPlantTile.innerHTML = "";
    }
  
    let num = getRandomTile();

    if (currentMoleTile && currentMoleTile.id == num) {
        return;
    }

    let plant = document.createElement("img");
    plant.src="img/piranha-plant.png";
    currentPlantTile=document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function setMole(){
    if (gameOver){
        return;
    }
    if (currentMoleTile){ 
        currentMoleTile.innerHTML = "";
    }
    let num = getRandomTile();

    if (currentPlantTile && currentPlantTile.id==num) {
        return;
    }

    let mole = document.createElement("img");
    mole.src="img/monty-mole.png";
    currentMoleTile=document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function selectTile(){
    if (gameOver){
        return;
    }
    if  (this == currentMoleTile){
        score+=10;
        document.getElementById("score").innerText="SCORE : "+score.toString();
    }else if (this == currentPlantTile){  
        document.getElementById("score").innerText="GAME OVER .Your score is : "+score.toString();
        gameOver=true; 
        button2.style.margin="1rem";
        button2.style.display="flex";
        button1.style.display="none";   
    }
}
