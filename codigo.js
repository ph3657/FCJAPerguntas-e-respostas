const allQuestions = {
  animais: [
    { question: "Qual animal é conhecido como o rei da selva?", options: ["Tigre", "Leão", "Elefante", "Pantera"], answer: "Leão" },
    { question: "Qual desses animais é um mamífero aquático?", options: ["Polvo", "Tubarão", "Golfinho", "Lula"], answer: "Golfinho" },
    { question: "Qual ave é símbolo da paz?", options: ["Coruja", "Águia", "Pomba", "Gavião"], answer: "Pomba" }
  ],
  geografia: [
    { question: "Qual é o maior oceano do planeta?", options: ["Atlântico", "Índico", "Ártico", "Pacífico"], answer: "Pacífico" },
    { question: "Qual país tem o formato de uma bota?", options: ["Espanha", "México", "Itália", "Austrália"], answer: "Itália" },
    { question: "Em que continente está o Brasil?", options: ["Europa", "África", "América do Sul", "Ásia"], answer: "América do Sul" }
  ],
  historia: [
    { question: "Quem descobriu o Brasil?", options: ["Pedro Álvares Cabral", "Dom Pedro I", "Vasco da Gama", "Tiradentes"], answer: "Pedro Álvares Cabral" },
    { question: "Em que ano ocorreu a Independência do Brasil?", options: ["1822", "1889", "1500", "1808"], answer: "1822" },
    { question: "Quem foi o primeiro presidente do Brasil?", options: ["Getúlio Vargas", "Deodoro da Fonseca", "Lula", "Juscelino Kubitschek"], answer: "Deodoro da Fonseca" }
  ]
};

let selectedQuestions = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreEl = document.getElementById('score');
const quizContainer = document.getElementById('quiz-container');
const themeSelection = document.getElementById('theme-selection');

function startQuiz(theme) {
  selectedQuestions = allQuestions[theme];
  currentQuestion = 0;
  score = 0;

  themeSelection.style.display = "none";
  quizContainer.style.display = "block";

  questionEl.style.display = "block";
  optionsEl.style.display = "block";
  scoreEl.textContent = "";
  restartBtn.style.display = "none";

  showQuestion();
}

function showQuestion() {
  const q = selectedQuestions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.className = "option";
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = selectedQuestions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  document.querySelectorAll('.option').forEach(opt => {
    opt.onclick = null;
    opt.style.backgroundColor = (opt.textContent === correct) ? "#90ee90" : "#ffb6b6";
  });

  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Você acertou ${score} de ${selectedQuestions.length} perguntas!`;
  restartBtn.style.display = "inline-block";
}

restartBtn.onclick = () => {
  themeSelection.style.display = "block";
  quizContainer.style.display = "none";
};
