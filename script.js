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
  
  let selectedOptions = {};
  
  function startQuiz() {
    displayQuiz();
    startTimer();
  }

function displayQuiz() {
  const currentQuiz = questions[currentQuestion];
  quizContainer.innerHTML = '';

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

    optionRadio.addEventListener('change', () => {
      selectedOptions[currentQuestion] = option;
    });
  });

  quizContainer.appendChild(questionDiv);

  const currentSelectedOption = selectedOptions[currentQuestion];
  if (currentSelectedOption !== undefined) {
    const optionRadio = questionDiv.querySelector(`input[type="radio"][value="${currentSelectedOption}"]`);
    if (optionRadio) {
      optionRadio.checked = true;
    }
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft >= 0) {
      timerDisplay.textContent = `Time left: ${timeLeft} sec`;
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Time is up!';
      calculateScore(); // Auto-submit when time's up
      displayFinalScore();
    }
  }, 1000);
}

function showNextQuestion() {
  saveSelectedOption();

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuiz();
  }
}

function showPreviousQuestion() {
  saveSelectedOption();

  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuiz();
  }
}

function saveSelectedOption() {
  const selectedRadio = document.querySelector(`input[type="radio"][name='question_${currentQuestion}']:checked`);
  if (selectedRadio) {
    selectedOptions[currentQuestion] = selectedRadio.value;
  }
}

// Event listeners for next, previous buttons
nextButton.addEventListener('click', showNextQuestion);
prevButton.addEventListener('click', showPreviousQuestion);


function submitAnswers() {
  calculateScore();
  displayFinalScore();
}

submitButton.addEventListener('click', submitAnswers);

function calculateScore() {
  finalScore = 0;

  questions.forEach((quiz, index) => {
    const selectedRadio = selectedOptions[index];

    if (selectedRadio && selectedRadio === quiz.answer) {
      finalScore++;
    }
  });
}

function displayFinalScore() {
  finalScoreDisplay.textContent = ` ${finalScore}`;
}

// Start the quiz
displayQuiz(); // Initially display the first question