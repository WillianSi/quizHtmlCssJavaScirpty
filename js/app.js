const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionConteiner = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = 10; // para trocar o numero de questões do quiz

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

//puxas as questoues do array//
function setAvailableQuestions(){
    const totalQuestions = quiz.length;
    for(let i=0; i<totalQuestions; i++){
        availableQuestions.push(quiz[i])
    }
}

//setar o numero de questoes e numero de opções//
function getNewQuestion(){
    //setar numero de questoes//
    questionNumber.innerHTML = "Questão " + (questionCounter + 1) + " de " + questionLimit;
    //setar o texto das questões//
   //pegar randomicamente as questões//
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //pegar a posição do questionIndex no availabreQuestion array//
    const index1 = availableQuestions.indexOf(questionIndex);
    //remover questionIndex no  availableQuestion array para as questões nao repetirem// 
    availableQuestions.splice(index1,1);
    //mostrar imagem da questao
    if(currentQuestion.hasOwnProperty("img")){
        const img = document.createElement("img");
        img.src = currentQuestion.img;
        questionText.appendChild(img);
    }
    //setar as opções
   //pegar o length  das opções
    const optionLen = currentQuestion.options.length
    //pegar as opçoes dentro de availableOptions Array
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }
    optionConteiner.innerHTML = '';

    let animationDelay = 0.15;

    //criar as opçoes no html
    for(let i=0; i<optionLen; i++){
        //Opções random
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        //pegar a posição do OptionIndex no availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        //remove o optionIndex do availabreOptions Array para nao repetir//
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        
        //animação das opções//
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;

        option.className = "option";
        optionConteiner.appendChild(option)
        option.setAttribute("onclick","getResult(this)");
    }
    questionCounter++
}

//Pegar o resultado do current attempt question
function getResult(element){
    const id = parseInt(element.id);
    //pegar a resposta e comparar com o id clicado nas opções
    if (id === currentQuestion.answer) {
        //setar a cor verde quando a respostar estiver correta//
        element.classList.add("correct");
        //adicionar o indicador de marcação correta//
        updateAnswerIndicator("correct");
        correctAnswers++;

    } else {
        //setar a cor vermelha quando a resposta estiver errada
        element.classList.add("wrong");
        //adicionar o indicador de marcação errada//
        updateAnswerIndicator("wrong");

        //se a resposta for incorreta mostrar a opção correta na cor verde//
        const optionLen = optionConteiner.children.length;
        for(let i=0; i<optionLen; i++){
            if (parseInt(optionConteiner.children[i].id) === currentQuestion.answer){
                optionConteiner.children[i].classList.add("correct");        
            }
        }
    }

    attempt++;
    unclickableOptions();
}

// quando o usuario selecionar uma opção todas as outras opções ficaram restritas de serem cicadas//
function unclickableOptions(){
    const optionLen = optionConteiner.children.length;
    for(let i=0; i<optionLen; i++){
        optionConteiner.children[i].classList.add("already-answered");
    }
}

function answerIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = questionLimit;
    for(let i=0; i<totalQuestion; i++){
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType)

}

function next(){
    if (questionCounter === questionLimit) {
        quizOver();        
    }
    else{
        getNewQuestion();
    }
}

function quizOver(){
    //esconde o quizbox
    quizBox.classList.add("hide");
    //mostra o result box
    resultBox.classList.remove("hide");
    quizResult();
}

// Pega o Resultado do quiz
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/questionLimit)*100;
    resultBox.querySelector(".percentagem").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
}

function resertQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    availableQuestions = [];
}

function tryAgainQuiz(){
   //Esconde o resultBox
    resultBox.classList.add("hide");
    //mostra o quiz box
    quizBox.classList.remove("hide");
    resertQuiz();
    startQuiz();
}

function goToHome(){
    //esconder o resultBox e home box
    resultBox.classList.add("hide");
    homeBox.classList.add("hide");
    //vai para pagina inicial
    window.location.href = "/paginaInicial.html";
}

//###### iNICIANDO O QUIZZ#####//

function startQuiz(){
    //esconder o homeBox
    homeBox.classList.add("hide");
    //mostrar o quizBox
    quizBox.classList.remove("hide");
    //Primeiro setar todas as questoes do availabrequestions array/
    setAvailableQuestions();
    //Segundo temos que chamar a função get newquestion//
    getNewQuestion();
    // criação do indicador de questões//
    answerIndicator();
}

window.onload = function(){
    homeBox.querySelector(".total-questions").innerHTML = questionLimit;
}