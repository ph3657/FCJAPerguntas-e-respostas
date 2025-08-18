const allQuestions = {
  JoséAmérico: [
    { question: "Qual foi a obra mais famosa de José Américo de Almeida?", options: ["O Guarani", "A Bagaceira", "O Quinze", "Os Sertões"], answer: "A Bagaceira" },
    { question: "José Américo de Almeida foi governador de qual estado brasileiro?", options: ["Ceará", "Bahia", "Paraíba", "Rio Grande do Norte"], answer: "Paraíba" },
    { question: "Além de escritor, José Américo também atuou como?", options: ["Ministro de Getúlio Vargas", "Ator de cinema", "Compositor musical", " Empresário do café"], answer: "Ministro de Getúlio Vargas" },
    { question: "Em que ano nasceu José Américo de Almeida?", options: ["1887", "1895", "1879", "1880"], answer:"1887"},
    { question: "Qual movimento literário sua obra A Bagaceira ajudou a consolidar?", options: ["Modernismo", "Regionalismo nordestino", "Parnasianismo", "Naturalismo"], answer:"Regionalismo nordestino"},
    { question: "José Américo de Almeida nasceu em qual cidade paraibana?", options: ["Campina Grande", "João Pessoa", "Areia", "Sousa"], answer:"Areia"},
  ],
  gibi: [
    { question: "Qual destes quadrinistas é paraibano e autor de obras premiadas como Bando de Dois?", options: ["Mauricio de Sousa", "Danilo Beyruth", "Laerte Coutinho", "Ziraldo"], answer: "Danilo Beyruth" },
    { question: "Qual é o gibi mais famoso criado por Mauricio de Sousa?", options: ["Turma da Mônica", "Menino Maluquinho", "Chico Bento Moço", "Capitão Feio"], answer: "Turma da Mônica" },
    { question: "Qual destes quadrinhos brasileiros teve forte inspiração no folclore nordestino?", options: ["Mônica Jovem", "Menino Maluquinho", "Lampião", "O Doutrinador"], answer: "Lampião" },
    { question: "Qual evento de quadrinhos é um dos mais importantes da Paraíba?", options: ["Bienal do Livro de São Paulo", "CCXP", "HQPB", "Festival Internacional de Quadrinhos de Belo Horizonte"], answer: "HQPB" },
    { question: "Em que ano surgiu a revista O Gibi, cujo nome se tornou sinônimo de revista em quadrinhos no Brasil?", options: ["1939", "1920", "1968", "1955"], answer: "1939" },

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
