// now we start writing javascript code 
// first define variables related to the Gamepad;
var playing = false;
var score = 0;
var timeremaining = 0;
let action;
let z;

// if we need more variables we will define them later 
const startReset = document.getElementById('startReset');
const scores = document.getElementById('score');
const TimeRemain = document.getElementById('timeLeft');
const question = document.getElementById('question');
const mainContainer = document.getElementById('main-container');
const gameover = document.getElementById('gameover');


startReset.onclick = function(){
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        startReset.innerHTML = 'Reset game';
        score = 0;
        scores.style.display = 'block';
        TimeRemain.style.display = 'block';
        timeremaining = 60;
        TimeRemain.innerHTML = timeremaining;
        TimeRemaining();
        LoadQuestion();
    }
    for(let i = 1; i < 5; i++){
        if(playing == true){
        document.getElementById("box" + i).onclick = function(){
            if(this.innerHTML == z){
                score++;
                scores.innerHTML  = score;
                LoadQuestion();
            }
            else{
                LoadQuestion();
            }
        }
    }

};

function LoadQuestion(){
    let x = Math.floor(Math.random() * (15 - 7) + 7);
    let y = Math.floor(Math.random() * (15 - 7) + 7);
    z = x * y;
    question.innerHTML = x + " * " + y + " = ?";
    for(let i = 1; i < 5; i++){
        let a = Math.floor(Math.random() * (15 - 7) + 7);
        let b = Math.floor(Math.random() * (15 - 7) + 7); 
        let c = a * b;
        document.getElementById("box" + i).innerHTML = c;
    }
    let correctPosition = Math.floor(Math.random() * (5 - 1) + 1);
    document.getElementById("box" + correctPosition).innerHTML = z;
}

// console.log(playing);
function TimeRemaining(){
    console.log(timeremaining);
    action = setInterval(function(){
        if(timeremaining == 0){
            mainContainer.style.display = "none";
            console.log(score);
            gameover.style.display = "block";
            if(score == 0 || score < 5){
                let AverageScore = "You played not well ";
                gameover.innerHTML = AverageScore + score;
            }else if(score > 5 && score < 10){
                let BetterScore = "You Played Well ";
                gameover.innerHTML = BetterScore + score;
            }else{
                let bestScore = "You Played Outstanding ";
                gameover.innerHTML = bestScore + score;
            }
            clearInterval(action);
        }else{
            timeremaining--;
            TimeRemain.innerHTML = timeremaining;
        }
    },1000)
}
}