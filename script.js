const questions = [
    {
        question: "What is the name of the tallest mountain peak in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Lhotse", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Mount Everest", correct: true },

        ]

    },
    {
        question: "What is the capital of Bangladesh?",
        answers: [
            { text: "Dhaka", correct: true },
            { text: "New Delhi", correct: false },
            { text: "Khulna", correct: false },
            { text: "Kolkata", correct: false }
        ]

    },
    {
        question: "What is the currency of Bangladesh?",
        answers: [
            { text: "Rupee", correct: false },
            { text: "Taka", correct: true },
            { text: "Dollar", correct: false },
            { text: "Riyal", correct: false }
        ]

    },
    {
        question: "What is the name of the largest rainforest in the world?",
        answers: [
            { text: "Congo", correct: false },
            { text: "Amazon rainforest", correct: true },
            { text: "Australiasia", correct: false },
            { text: "Brazil", correct: false },

        ]

    },

]

const question = document.getElementById('question')
const ansArea = document.querySelector('.ans-area')
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion()
}

function showQuestion(){
    resetState()
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    question.innerHTML = questionNo +'. '+ currentQuestion.question;

currentQuestion.answers.forEach(answer =>{
    
    const button = document.createElement('button')
    button.innerHTML = answer.text;
    ansArea.appendChild(button)

    if(answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click',selectAnswer)
    
})


}
function resetState(){
nextBtn.style.display = 'none';
while(ansArea.firstChild){
ansArea.removeChild(ansArea.firstChild)
}
}

function selectAnswer(e){
    const eventBtn = e.target;
    const correct = eventBtn.dataset.correct == 'true';
    if(correct){
        eventBtn.classList.add('correct')
        score++
    }
    else{
        eventBtn.classList.add('inCorrect')
    }
    Array.from(ansArea.children).forEach(button =>{
        if(button.dataset.correct == 'true'){
            button.classList.add('correct');
        }
        button.disabled = 'true';
        nextBtn.style.display = 'block';
    })
}


function showScore(){
    resetState()
    question.innerHTML = `your score is ${score} out of ${questions.length}`;
    nextBtn.style.display = 'block'
    nextBtn.innerHTML = 'play Again';

}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}


nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})


startQuiz()













