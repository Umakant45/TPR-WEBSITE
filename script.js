// =====================
// Application state
// =====================
let currentSubject = '';
let currentQuestionIndex = 0;
let questions = [];

// =====================
// DOM elements
// =====================
const subjectsView = document.getElementById('subjects-view');
const questionsView = document.getElementById('questions-view');
const subjectCards = document.querySelectorAll('.subject-card');
const backBtn = document.getElementById('back-btn');
const subjectTitle = document.getElementById('subject-title');
const questionCounter = document.getElementById('question-counter');
const totalQuestions = document.getElementById('total-questions');
const currentIndex = document.getElementById('current-index');
const questionTitle = document.getElementById('question-title');
const questionText = document.getElementById('question-text');
const questionDifficulty = document.getElementById('question-difficulty');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('random-btn');
const doneBtn = document.getElementById('done-btn');

// Login page elements
const loginForm = document.getElementById("login-form");
const loginPage = document.getElementById("login-page");
const mainContent = document.getElementById("main-content");

// =====================
// Event listeners
// =====================
subjectCards.forEach(card => {
    card.addEventListener('click', () => {
        const subject = card.getAttribute('data-subject');
        loadSubject(subject);
    });
});

backBtn.addEventListener('click', () => {
    showSubjectsView();
});

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

randomBtn.addEventListener('click', () => {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    displayQuestion();
});
doneBtn.addEventListener("click", () => {
    // Save solved question silently
    markSolved(currentSubject, currentQuestionIndex + 1);
    // (optional) give subtle feedback
    doneBtn.textContent = "✅ Done";
    setTimeout(() => { doneBtn.textContent = "Done"; }, 1000);
});

// Login form submit
// Login form submit
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  if(name && email){
    loginPage.style.display = "none";
    mainContent.style.display = "block";

    // Save current user info
    let users = JSON.parse(localStorage.getItem("users")) || {};
    if (!users[email]) {
      users[email] = { name, email, solved: {} };
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", email);

    // Show welcome message
    const header = document.querySelector(".header h1");
    header.innerHTML = `Welcome, ${name}! 👋 <br> Programming Question Bank`;
  }
});


// =====================
// Functions
// =====================
function loadSubject(subject) {
    currentSubject = subject;
    questions = questionBank[subject] || [];
    currentQuestionIndex = 0;
    
    subjectTitle.textContent = `${subject.toUpperCase()} Questions`;
    totalQuestions.textContent = questions.length;
    
    showQuestionsView();
    displayQuestion();
}

function displayQuestion() {
    if (questions.length === 0) return;
    
    const question = questions[currentQuestionIndex];
    
    questionTitle.textContent = question.title;
    questionText.innerHTML = question.content;
    
    // Difficulty badge
    questionDifficulty.innerHTML = `<span class="difficulty-badge ${question.difficulty}">
        ${question.difficulty.toUpperCase()}
    </span>`;
    
    // Counters
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    currentIndex.textContent = currentQuestionIndex + 1;
    
    // Button states
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
}

function showSubjectsView() {
    subjectsView.style.display = 'block';
    questionsView.classList.remove('active');
    subjectCards.forEach(card => card.classList.remove('active'));
}

function showQuestionsView() {
    subjectsView.style.display = 'none';
    questionsView.classList.add('active');
    subjectCards.forEach(card => {
        card.classList.remove('active');
        if (card.getAttribute('data-subject') === currentSubject) {
            card.classList.add('active');
        }
    });
}

// =====================
// Initialize app
// =====================
showSubjectsView();


function showProgress() {
  let users = JSON.parse(localStorage.getItem("users")) || {};
  let currentEmail = localStorage.getItem("currentUser");
  if (!currentEmail) return;

  let user = users[currentEmail];
  let progressDiv = document.getElementById("progress");
  let progressData = document.getElementById("progressData");

  progressData.innerHTML = "";

  for (let subject in user.solved) {
    let solvedQs = user.solved[subject];
    let li = document.createElement("li");
    li.textContent = `${subject.toUpperCase()}: Solved Questions → ${solvedQs.join(", ")}`;
    progressData.appendChild(li);
  }

  progressDiv.style.display = "block";
}

// Save solved question
function markSolved(subject, qIndex) {
  let users = JSON.parse(localStorage.getItem("users")) || {};
  let currentEmail = localStorage.getItem("currentUser");
  if (!currentEmail) return;

  let user = users[currentEmail];
  if (!user.solved[subject]) {
    user.solved[subject] = [];
  }

  // Avoid duplicates
  if (!user.solved[subject].includes(qIndex)) {
    user.solved[subject].push(qIndex);
  }

  users[currentEmail] = user;
  localStorage.setItem("users", JSON.stringify(users));
}
