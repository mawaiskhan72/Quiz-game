const questions = [
  {
    question: "Where is Warsak Dam of Pakistan situated?  ",
    options: ["Khyber Pakhtunkhwa", "Punjab", "Sindh", "Balochistan"],
    answer: "Khyber Pakhtunkhwa"
  },
  {
    question: "Shakarparrian is situated in?",
    options: ["Rawalpindi", "Murree", "Islamabad", "Peshawar"],
    answer: "Islamabad"
  },
  {
    question: "National code of Pakistan is?",
    options: ["Pak", "Pk", "Pak 1", "None of them"],
    answer: "Pk"
  },

  {
    question: "Mirpur is a famous city of?",
    options: ["Punjab", "Azad Kashmir", "None of them", "KPK"],
    answer: "Azad Kashmir"
  },
  {
    question: "The headquarters of Air Force is located in _________ ?",
    options: ["Islamabad", "Peshawar", "Rawalpindi", "Karachi"],
    answer: "Islamabad"
  },
  {
    question: "Who is entitled as ” MOHSIN-E- PAKISTAN” ?",
    options: ["Dr Abdul Salam", "Dr Adeeb Rizvi", "Dr Afia Siddiqui", "Dr Abdul Qadeer Khan"],
    answer: "Dr Abdul Qadeer Khan"
  },
  {
    question: "The war of independence was started in?",
    options: ["1858", "1857", "1867", "1859"],
    answer: "1857"
  },
  {
    question: "The first operational motorway in Pakistan named?",
    options: ["M-1", "M-2", "M-3", "M-4"],
    answer: "M-2"
  },
  {
    question: "Qissa khawani Bazar is in which district of Pakistan?",
    options: ["Lahore", "Peshawar", "Hyderabad", "Quetta"],
    answer: "Peshawar"
  },
  {
    question: "The land of hospitality is____________?",
    options: ["KPK", "Sindh", "Baluchistan", "Punjab"],
    answer: "KPK"
  },
];

const quizContainer = document.getElementById('quiz-container');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const finalScoreDisplay = document.getElementById('final-score');
const timerDisplay = document.getElementById('timer');

let finalScore = 0;
let timeLeft = 60;
let timerInterval;
let currentQuestion = 0;
 


function startQuiz() {
  displayQuiz(); // Display quiz questions only if the container is empty
  startTimer(); // Start the timer
}


function displayQuiz() {
  const currentQuiz = questions[currentQuestion];
  quizContainer.innerHTML = ''; // Clear previous question content

  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const questionHeading = document.createElement('p');
  questionHeading.textContent = `Question ${currentQuestion + 1}`;
  questionHeading.classList.add('font-semibold', 'text-lg');
  questionDiv.appendChild(questionHeading);

  const questionStatement = document.createElement('p');
  questionStatement.textContent = currentQuiz.question;
  questionStatement.style.paddingTop = '10px';
  questionDiv.appendChild(questionStatement);

  // Adding radio buttons for options
  currentQuiz.options.forEach((option, optionIndex) => {
    const optionContainer = document.createElement('div');

    const optionRadio = document.createElement('input');
    optionRadio.type = 'radio';
    optionRadio.name = `question_${currentQuestion}`;
    optionRadio.value = option;
    optionRadio.classList.add('mr-2');
    optionContainer.appendChild(optionRadio);

    const optionLabel = document.createElement('label');
    optionLabel.textContent = option;
    optionContainer.appendChild(optionLabel);

    questionDiv.appendChild(optionContainer);

    const lineBreak = document.createElement('br');
    questionDiv.appendChild(lineBreak);
  });

  quizContainer.appendChild(questionDiv);
}

function showNextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuiz();
  }
}

function showPreviousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuiz();
  }
}


nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', showPreviousQuestion);


// Display the first question on page load
displayQuiz();


submitButton.addEventListener('click', () => {
  calculateScore(); // Calculate and display the final score when the submit button is clicked
});



submitButton.addEventListener('click', () => {
  calculateScore(); // Calculate and display the final score when the submit button is clicked
});


function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft >= 0) {
      timerDisplay.textContent = `Time left: ${timeLeft} sec`;
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Time is up!';
      calculateScore();
    }
  }, 1000);
}

function startQuiz() {
  displayQuiz();
  startTimer();
}

submitButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  calculateScore();
  displayFinalScore();
});

function calculateScore() {
  finalScore = 0;
  
  questions.forEach((quiz, index) => {
    const selectedRadio = document.querySelector(`input[type="radio"][name='question_${index}']:checked`);

    if (selectedRadio && selectedRadio.value === quiz.answer) {
      finalScore++;
    }
  });

  finalScoreDisplay.textContent = finalScore;
}

function displayFinalScore() {
  const finalScoreText = document.createElement('p');
  finalScoreText.textContent = `Final Score: ${finalScore}`;
}


startQuiz();