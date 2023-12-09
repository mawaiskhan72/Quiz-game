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
];

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const finalScoreDisplay = document.getElementById('final-score');
let finalScore = 0;

function displayQuiz() {
  questions.forEach((quiz, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    const questionHeading = document.createElement('p');
    questionHeading.textContent = `Question ${index + 1}`;
    questionDiv.appendChild(questionHeading);

    const questionStatement = document.createElement('p');
    questionStatement.textContent = quiz.question;
    questionDiv.appendChild(questionStatement);

    quiz.options.forEach(option => {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
      optionButton.addEventListener('click', () => selectAnswer(option, quiz.answer));
      questionDiv.appendChild(optionButton);
    });

    quizContainer.appendChild(questionDiv);
  });
}

function selectAnswer(selectedOption, correctAnswer) {
  if (selectedOption === correctAnswer) {
    // If the answer is correct, increment the final score
    finalScore++;
  }
}

function calculateScore() {
  finalScoreDisplay.textContent = finalScore;
  alert(`Your final score is: ${finalScore}`);
}

// Call the function to display the quiz
displayQuiz();

// Event listener for the submit button
submitButton.addEventListener('click', calculateScore);
