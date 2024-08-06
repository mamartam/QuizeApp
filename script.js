const questions = [
    {
        question: "Nina ___ like her sister.",
        answers: [
            { text: "isn't look", correct: false },
            { text: "doesn't look", correct: true },
            { text: "don't look", correct: false },
            { text: "look", correct: false },

        ]
    },
    {
        question: "Den ___ his father. They are both friendly and confident.",
        answers: [
            { text: "look like", correct: false },
            { text: "is like", correct: true },
            { text: "likes", correct: false },
            { text: "looks like", correct: false },
        ]
    },
    {
        question: "My results this week are ___ last week.",
        answers: [
            { text: "more good then", correct: false },
            { text: "gooder then", correct: false },
            { text: "better then", correct: true },
            { text: "more better then", correct: false },

        ]
    },
    {
        question: "This box is ___ that one.",
        answers: [
            { text: "heavyer than", correct: false },
            { text: "more heavy than", correct: false },
            { text: "more heavier then", correct: false },
            { text: "heavier then", correct: true },

        ]
    },
    {
        question: "Frank is ___ student ___ the class.",
        answers: [
            { text: "the most inteligant; in", correct: true },
            { text: "most inteligant; from", correct: false },
            { text: "the intelligentest; in", correct: false },
            { text: "the most inteligant; from", correct: false },

        ]
    },
    {
        question: "Dave's task is ___ mine.",
        answers: [
            { text: "as aesyer as", correct: false },
            { text: "as easy than", correct: false },
            { text: "as easy as", correct: true },
            { text: "more easy as ", correct: false },

        ]
    },
    {
        question: "I ___ read this book. Our teacher says it is optional.",
        answers: [
            { text: "shouldn't", correct: false },
            { text: "don't have to", correct: true },
            { text: "haven't to", correct: false },
            { text: "can't", correct: false },

        ]
    },

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

};

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
};
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();

    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();




