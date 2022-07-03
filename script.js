const submitBtn = document.getElementById('submit');
const score = document.querySelector('.question');
const main = document.querySelector('.mainDiv');
const showScore = document.querySelector('#showScore');



const questionSet =  [{
    id: 0,
    q: "Q1. What is capital of India?",
    a: [{ text: "Gandhinagar", isCorrect: false },
        { text: "Surat", isCorrect: false },
        { text: "Delhi", isCorrect: true },
        { text: "mumbai", isCorrect: false }
    ],
    ans: "ans3"

},
{
    id: 1,
    q: "Q2. What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
        { text: "Phuket", isCorrect: false },
        { text: "Ayutthaya", isCorrect: false },
        { text: "Bangkok", isCorrect: true }
    ],
    ans: "ans4"

},
{
    id: 2,
    q: "Q3. What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ],
    ans: "ans3"

}]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')
let answer;
let questionCount = 0 ;
let scoreCount = 0 ;


const loadQuestions = ()=>{
    console.log(questionSet);
    question.innerText = questionSet[questionCount]['q'];

    option1.innerText = questionSet[questionCount]['a'][0]['text'];
    option2.innerText = questionSet[questionCount]['a'][1]['text'];
    option3.innerText = questionSet[questionCount]['a'][2]['text'];
    option4.innerText = questionSet[questionCount]['a'][3]['text'];

    // answer = questionSet[questionCount][]
}

loadQuestions();
const getCheckAnswer = ()=>{
    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;       
}

const deselectAll = ()=>{
    answers.forEach((currElem)=> currElem.checked = false );
}

submit.addEventListener('click' , ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer ==  questionSet[questionCount]['ans']){
        scoreCount++;
        console.log(scoreCount);
    }
    questionCount++;
    deselectAll();
    if(questionCount < questionSet.length){
        loadQuestions();
    }else{
        showScore.innerHTML = `
            <h3> <b>Your Score : ${scoreCount}/${questionSet.length} </b></h3>
            <button class="button" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
})




// https://quizapi.io/api/v1/questions/apiKey=Ki1fFc2iMtGrZZHioY6ahE663v18dGBC2IZ3tAZd


    


