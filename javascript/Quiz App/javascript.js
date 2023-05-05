const questions = [
    {
        Question: "How many continents are there?",
        a: "Five", 
        b: "Seven",
        c: "Eight",
        d: "Nine",
        Correct: 'b'
    },
    {
        Question: "Which is faster light or sound?",
        a: "Sound", 
        b: "Light",
        c: "Both are having Equal Speed",
        d: "None of these",
        Correct: 'b'
    },
    {
        Question: "Which animal lays the largest eggs??",
        a: "Ostrich", 
        b: "Eagle",
        c: "Humming Bird",
        d: "peacoke",
        Correct: 'a'
    },
    {
        Question: "In which country would you find the Sydney Opera House?",
        a: "Australia",  
        b: "India",
        c: "Thailand",
        d: "Malyasia",
        Correct: 'a'
    },
    {
        Question: "How many days are there in a year?",
        a: "366", 
        b: "365",
        c: "355",
        d: "368",
        Correct: 'b'
    },
    {
        Question: "How many colors of the rainbow are there?",
        a: "Six", 
        b: "Eight",
        c: "Ten",
        d: "Seven",
        Correct: 'd'
    },
    {
        Question: "How many letters are in the English alphabet?",
        a: "26", 
        b: "36",
        c: "25",
        d: "22",
        Correct: 'a'
    },
  
]
let score = 0;
const mainsection = document.getElementById('cont');
const question = document.getElementById('question');
const a = document.getElementById("a_text");
const b = document.getElementById("b_text");
const c = document.getElementById("c_text");
const d = document.getElementById("d_text");
const submit = document.getElementById("submit");
const result = document.getElementById("scores");

let currentQuestion = 0;
showQuestion();

function showQuestion() {
    deSelectAnswer();
    question.innerHTML = questions[currentQuestion].Question;
    a.innerHTML = questions[currentQuestion].a;
    b.innerHTML = questions[currentQuestion].b;
    c.innerHTML = questions[currentQuestion].c;
    d.innerHTML = questions[currentQuestion].d;
}

function getAnswer(){
    let answer = document.querySelectorAll(".answer");
    let ant = undefined;
    answer.forEach(
        (answers) => {
            if(answers.checked){
                ant = answers.id;
                // console.log(answers.id);
            }
        });
        return ant;
    //console.log(undefined);
}

function deSelectAnswer(){
    let answer = document.querySelectorAll(".answer");
    answer.forEach(
        (answers) => {
            answers.checked = false;
        });
}
submit.addEventListener('click', () => {
    let ans =  getAnswer();
    console.log(ans);
    if(ans){
        
        if(ans === questions[currentQuestion].Correct){
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        }else if(currentQuestion == questions.length){
            mainsection.classList.add("active");
            result.classList.add("active");
            result.innerHTML = "<div>Your Score is "+ score +"/ "+ questions.length +"</div><button onclick='location.reload()'>Reload</button>";
            
        }
    }
});
