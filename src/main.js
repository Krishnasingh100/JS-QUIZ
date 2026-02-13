import quizQuestion from "./questions.js";

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


let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedQuestions = [];
let isAnswered = false;
const autoAdvanceDelay = 2000; // 2 seconds

// Initialize
function init() {
    startBtn.addEventListener("click", startQuiz);
    optionButtons.forEach((button, index) => {
        button.addEventListener("click", () => selectAnswer(index));
    });
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
    const numToPick = Math.min(20, quizQuestion.length);
    selectedQuestions = [];
    const available = [...quizQuestion];
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
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
}

// Show Score
function showScore() {
    hideElement(quizContainer);
    showElement(scoreBox);

    finalScore.textContent = score;
    totalQuestions.textContent = selectedQuestions.length;

    let message = "";
    const percentage = (score / selectedQuestions.length) * 100;
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

    // Add restart button event listener
    const restartBtn = document.getElementById("restart");
    restartBtn.addEventListener("click", restartQuiz);
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
