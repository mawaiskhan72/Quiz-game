const questions = [
  {
    question: "Where is Warsak Dam of Pakistan situated?  ",
    options: ["a-Khyber Pakhtunkhwa", "b-Punjab", "c-Sindh", "d-Sindh"],
    answer: "a-Khyber Pakhtunkhwa"
  },
  {
    question: "Shakarparrian is situated in?",
    options: ["a-Rawalpindi", "b-Murree", "c-Islamabad", "d-Peshawar"],
    answer: "c-Islamabad"
  },
  {
    question: "National code of Pakistan is?",
    options: ["a-Pak", "b-Pk", "c-Pak 1", "d-None of them"],
    answer: "b-Pk"
  },

  {
    question: "Mirpur is a famous city of?",
    options: ["a-Punjab", "b-Azad Kashmir", "c-None of them", "d-KPK"],
    answer: "b-Azad Kashmir"
  },
  {
    question: "The headquarters of Air Force is located in _________ ?",
    options: ["a-Islamabad", "b-Peshawar", "c-Rawalpindi", "d-Karachi"],
    answer: "a-Islamabad"
  },
  {
    question: "Who is entitled as ” MOHSIN-E- PAKISTAN” ?",
    options: ["a-Dr Abdul Salam", "b-Dr Adeeb Rizvi", "c-Dr Afia Siddiqui", "d-Dr Abdul Qadeer Khan"],
    answer: "d-Dr Abdul Qadeer Khan"
  },
  {
    question: "The war of independence was started in?",
    options: ["a-1858", "b-1857", "c-1867", "d-1859"],
    answer: "b-1857"
  },
  {
    question: "The first operational motorway in Pakistan named?",
    options: ["a-M-1", "b-M-2", "c-M-3", "d-M-4"],
    answer: "b-M-2"
  },
  {
    question: "Qissa khawani Bazar is in which district of Pakistan?",
    options: ["a-Lahore", "b-Peshawar", "c-Hyderabad", "d-Quetta"],
    answer: "b-Peshawar"
  },
  {
    question: "The land of hospitality is____________?",
    options: ["a-KPK", "b-Sindh", "c-Baluchistan", "d-Punjab"],
    answer: "a-KPK"
  },
];

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const finalScoreDisplay = document.getElementById('final-score');
let finalScore = 0;
let timeLeft = 60; // Set initial time in seconds


function displayQuiz() {
  questions.forEach((quiz, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionHeading = document.createElement('p');
    questionHeading.textContent = `Question ${index + 1}`;
    questionDiv.appendChild(questionHeading);

    const questionStatement = document.createElement('p');
    questionStatement.textContent = quiz.question;
    questionStatement.style.paddingTop = '10px'; // Padding top for the question
    questionDiv.appendChild(questionStatement);

    if (index < 10) {
      questionHeading.classList.add('font-semibold');
    }

    quiz.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.classList.add('px-3', 'py-1', 'rounded-xl', 'bg-white');
      optionButton.addEventListener('click', () => selectAnswer(optionButton, option, quiz.answer));
      questionDiv.appendChild(optionButton);
    });

    quizContainer.appendChild(questionDiv);
  });
}

function selectAnswer(optionButton, selectedOption, correctAnswer) {
  if (!optionButton.disabled) {
    if (selectedOption === correctAnswer) {
      finalScore++;
    }
    optionButton.disabled = true;
  }
}

function calculateScore() {
  finalScoreDisplay.textContent = finalScore;
}


let quizCompleted = false;
let timerInterval; // Variable to store the interval

// Function to handle the timer
function startTimer() {
  const timerDisplay = document.getElementById('timer'); // Assuming you have an element with id 'timer' to display the timer

  timerInterval = setInterval(() => {
    if (!quizCompleted) {
      timeLeft--;
      timerDisplay.textContent = `Time left: ${timeLeft} sec`;

      if (timeLeft === 0) {
        clearInterval(timerInterval); // Stop the timer when it reaches 0
        timerDisplay.textContent = 'Time is up! Try harder.';
        disableOptions(); // Disable options when time is up
      }
    } else {
      clearInterval(timerInterval); // Stop the timer when the quiz is completed
    }
  }, 1000); // Update the timer every second
}

function calculateScore() {
  finalScoreDisplay.textContent = finalScore; // Display the final score
  quizCompleted = true; // Set quizCompleted to true when the quiz is completed
  clearInterval(timerInterval); // Stop the timer when the quiz is completed
}

function disableOptions() {
  const optionButtons = document.querySelectorAll('button[role="option"]');
  optionButtons.forEach(button => {
    button.disabled = true; // Disable all option buttons
  });
  submitButton.disabled = true; // Disable submit button after time is up
}

displayQuiz();
startTimer();
submitButton.addEventListener('click', () => {
  calculateScore(); // Calculate and display the final score when the submit button is clicked
});


