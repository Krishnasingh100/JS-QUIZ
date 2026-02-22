import quizQuestion, { easyQuestions, mediumQuestions, hardQuestions } from "./questions.js";

const startBtn = document.getElementById("start-quiz");
const welcomeBox = document.getElementById("quiz-welcome");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const feedback = document.getElementById("feedback");
const scoreBox = document.getElementById("score-box");
const finalScore = document.getElementById("final-score");
const totalQuestions = document.getElementById("total-questions");
const scoreMessage = document.getElementById("score-message");
const scoreLevel = document.getElementById("score-level");
 const difficultyRadios = document.querySelectorAll(".difficulty-checkbox");


let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedQuestions = [];
let isAnswered = false;
let selectedDifficulty = null; // single selected difficulty: 'easy' | 'medium' | 'hard' 
const autoAdvanceDelay = 800; // .8 seconds

// Initialize
function init() {
    startBtn.addEventListener("click", startQuiz);
    optionButtons.forEach((button, index) => {
        button.addEventListener("click", () => selectAnswer(index));
    });

// initialize selectedDifficulty from any checked radio (if present)
    const initial = document.querySelector('.difficulty-checkbox:checked');
    selectedDifficulty = initial ? initial.value : null;
    difficultyRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            // set the single selected difficulty value
            selectedDifficulty = e.target.checked ? e.target.value : null;
        });
    });
    // setup restart button once
    const restartBtn = document.getElementById("restart");
    if (restartBtn) restartBtn.addEventListener("click", restartQuiz);
}

// Start Quiz
function startQuiz() {
    resetQuiz();
    pickRandomQuestions();
    showElement(quizContainer);
    hideElement(welcomeBox);
    loadQuestion();
}

// Reset Quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedQuestions = [];
    isAnswered = false;
    updateProgress();
}

// Pick Random Questions
function pickRandomQuestions() {
    // Use only the selected difficulty level
    let availableQuestions = [];
    if (selectedDifficulty === 'easy') {
        availableQuestions = [...easyQuestions];
    } else if (selectedDifficulty === 'medium') {
        availableQuestions = [...mediumQuestions];
    } else if (selectedDifficulty === 'hard') {
        availableQuestions = [...hardQuestions];
    }
    
    const numToPick = Math.min(20, availableQuestions.length);
    selectedQuestions = [];
    const available = [...availableQuestions];
    for (let i = 0; i < numToPick; i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selectedQuestions.push(available.splice(randomIndex, 1)[0]);
    }
}

// Load Question
function loadQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;

    optionButtons.forEach((button, index) => {
        button.textContent = question.options[index];
        button.classList.remove("selected", "correct", "incorrect");
        button.disabled = false;
    });

    feedback.textContent = "";
    isAnswered = false;
    updateProgress();
}

// Select Answer
function selectAnswer(selectedIndex) {
    if (isAnswered) return;

    isAnswered = true;
    const question = selectedQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    userAnswers.push(selectedIndex);

    // Update UI
    optionButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === selectedIndex) {
            button.classList.add("selected");
        }
        if (index === question.correct) {
            button.classList.add("correct");
        } else if (index === selectedIndex && !isCorrect) {
            button.classList.add("incorrect");
        }
    });

    if (isCorrect) {
        score++;
        feedback.textContent = "Correct! 🎉";
        feedback.style.color = "#10b981";
    } else {
        feedback.textContent = "Incorrect. The correct answer is highlighted.";
        feedback.style.color = "#ef4444";
    }

    // Auto-advance after delay
    setTimeout(() => {
        nextQuestion();
    }, autoAdvanceDelay);
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

// Update Progress
function updateProgress() {
    const total = selectedQuestions.length || 0;
    const current = total ? currentQuestionIndex + 1 : 0;
    const progress = total ? ((current) / total) * 100 : 0;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${current} / ${total}`;
}

// Show Score
function showScore() {
    hideElement(quizContainer);
    showElement(scoreBox);

    finalScore.textContent = score;
    totalQuestions.textContent = selectedQuestions.length;

    let message = "";
    const percentage = selectedQuestions.length ? (score / selectedQuestions.length) * 100 : 0;
    if (percentage >= 90) {
        message = "Excellent! You're a JavaScript master! 🏆";
    } else if (percentage >= 70) {
        message = "Great job! You have good JavaScript knowledge. 👍";
    } else if (percentage >= 50) {
        message = "Not bad! Keep practicing to improve. 📚";
    } else {
        message = "Keep learning! JavaScript is a vast topic. 💪";
    }
    scoreMessage.textContent = message;

    // Show the difficulty level the quiz was taken at
    const levelToShow = selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1);
    if (scoreLevel) scoreLevel.textContent = `Level: ${levelToShow}`;
}

// Restart Quiz
function restartQuiz() {
    hideElement(scoreBox);
    showElement(welcomeBox);
}

// Utility Functions
function showElement(element) {
    element.classList.remove("hidden");
}

function hideElement(element) {
    element.classList.add("hidden");
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
