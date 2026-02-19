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


let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedQuestions = [];
let isAnswered = false;
let selectedDifficulties = { easy: true, medium: true, hard: true };
const autoAdvanceDelay = 1500; // 1.5 seconds

// Initialize
function init() {
    startBtn.addEventListener("click", startQuiz);
    optionButtons.forEach((button, index) => {
        button.addEventListener("click", () => selectAnswer(index));
    });
    
    // Add checkbox listeners
    const difficultyCheckboxes = document.querySelectorAll(".difficulty-checkbox");
    difficultyCheckboxes.forEach(checkbox => {
        // initialize from checkbox state
        selectedDifficulties[checkbox.value] = checkbox.checked;
        checkbox.addEventListener("change", (e) => {
            selectedDifficulties[e.target.value] = e.target.checked;
        });
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
    // Combine questions based on selected difficulty levels
    let availableQuestions = [];
    
    if (selectedDifficulties.easy) {
        availableQuestions = [...availableQuestions, ...easyQuestions];
    }
    if (selectedDifficulties.medium) {
        availableQuestions = [...availableQuestions, ...mediumQuestions];
    }
    if (selectedDifficulties.hard) {
        availableQuestions = [...availableQuestions, ...hardQuestions];
    }
    
    // If no difficulty selected, show all
    if (availableQuestions.length === 0) {
        availableQuestions = [...quizQuestion];
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

    // Determine level from percentage
    let levelText = "";
    if (percentage >= 80) {
        levelText = "Hard";
    } else if (percentage >= 50) {
        levelText = "Medium";
    } else {
        levelText = "Easy";
    }
    if (scoreLevel) scoreLevel.textContent = `Level: ${levelText}`;

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
