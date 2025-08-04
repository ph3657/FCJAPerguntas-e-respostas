const questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
    answer: "Brasília"
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "Carlos Drummond", "Clarice Lispector", "Monteiro Lobato"],
    answer: "Machado de Assis"
  },
  {
    question: "Quanto é 7 x 8?",
    options: ["56", "48", "64", "58"],
    answer: "56"
  },
  {
    question: "Qual planeta é conhecido como planeta vermelho?",
    options: ["Marte", "Júpiter", "Saturno", "Vênus"],
    answer: "Marte"
  },
  {
    question: "Quem pintou a Mona Lisa?",
    options: ["Leonardo da Vinci", "Van Gogh", "Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "Qual é o maior oceano do planeta?",
    options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
    answer: "Pacífico"
  },
  {
    question: "Qual é o elemento químico com símbolo O?",
    options: ["Ouro", "Oxigênio", "Osmio", "Ozônio"],
    answer: "Oxigênio"
  },
  {
    question: "Em que continente está o Egito?",
    options: ["Ásia", "Europa", "África", "América"],
    answer: "África"
  },
  {
    question: "Qual animal é conhecido como rei da selva?",
    options: ["Elefante", "Leão", "Tigre", "Gorila"],
    answer: "Leão"
  },
  {
    question: "Qual o idioma mais falado no mundo?",
    options: ["Inglês", "Espanhol", "Chinês mandarim", "Hindi"],
    answer: "Chinês mandarim"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function showQuestion() {
  const q = questions[currentQuestion];
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
  const correct = questions[currentQuestion].answer;
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
  if (currentQuestion < questions.length) {
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
  scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

showQuestion();
