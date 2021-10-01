
const rockImg=document.getElementById("rock-js");
const paperImg=document.getElementById("paper-js");
const scissorImg=document.getElementById("scissor-js");
const result=document.getElementsByClassName("result");


let arr=["rock","paper","scissor"];

rockImg.onclick=function(){
    playComputer("rock");
    rockImg.classList.remove("click-animation");
    void rockImg.offsetWidth; // trigger reflow
    rockImg.classList.add("click-animation");
};

paperImg.onclick=function(){
    playComputer("paper");
    paperImg.classList.remove("click-animation");
    void paperImg.offsetWidth; // trigger reflow
    paperImg.classList.add("click-animation");
};

scissorImg.onclick=function(){
    playComputer("scissor");
    scissorImg.classList.remove("click-animation");
    void scissorImg.offsetWidth; // trigger reflow
    scissorImg.classList.add("click-animation");
};

function playComputer(player)
{
    let computer=arr[Math.floor(Math.random()*3)];
    //console.log(`Player Choosed : ${player}  Computer Choose : ${computer}`);
    if(player==computer){
        //console.log("Draw");
        result[0].innerHTML="Draw";
    }
    else if(player=="rock"&&computer=="scissor"||player=="scissor"&&computer=="paper"||player=="paper"&&computer=="rock"){
        //console.log("player wins");
        result[0].innerHTML="You Won";
        updatePlayerScore();
    }
    else{
        result[0].innerHTML="You lost!!!!";
        //console.log("computer wins");
        updateComputerScore();
    }
    
}



const playerScore=document.getElementById("player-score");
function updatePlayerScore()
{
    let score=parseInt(playerScore.innerHTML);
    playerScore.innerHTML=++score;
}

const computerScore=document.getElementById("computer-score");
function updateComputerScore()
{
    let score=parseInt(computerScore.innerHTML);
    computerScore.innerHTML=++score;
}

document.getElementById("reset-js").onclick=()=>{
    playerScore.innerHTML=0;
    computerScore.innerHTML=0;
};
