// Perguntas do quiz
const questions = [
    {
      question: "Qual é a capital da França?",
      answers: ["Londres", "Paris", "Berlim", "Madri"],
      correct: 1 // Índice da resposta correta
    },
    {
      question: "Qual é o maior planeta do Sistema Solar?",
      answers: ["Terra", "Marte", "Júpiter", "Vênus"],
      correct: 2
    },
    {
      question: "Quem pintou a Mona Lisa?",
      answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correct: 2
    }
  ];
  
  // Variáveis globais
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Elementos DOM
  const questionContainer = document.getElementById("question");
  const answersContainer = document.getElementById("answers");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const resultMessage = document.getElementById("result-message");
  const restartButton = document.getElementById("restart-btn");
  
  // Função para carregar a pergunta atual
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    answersContainer.innerHTML = ""; // Limpa as respostas anteriores
  
    // Gera as respostas
    currentQuestion.answers.forEach((answer, index) => {
      const li = document.createElement("li");
      li.textContent = answer;
      li.onclick = () => selectAnswer(index);
      answersContainer.appendChild(li);
    });
  
    nextButton.classList.add("hidden");
  }
  
  // Função para selecionar uma resposta
  function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;
  
    // Aplica estilos às respostas
    const answers = document.querySelectorAll("#answers li");
    answers.forEach((answer, index) => {
      if (index === correctIndex) {
        answer.style.backgroundColor = "#a5d6a7"; // Verde para correta
      } else if (index === selectedIndex) {
        answer.style.backgroundColor = "#ef9a9a"; // Vermelho para incorreta
      }
      answer.style.pointerEvents = "none"; // Desabilita cliques
    });
  
    // Atualiza pontuação
    if (selectedIndex === correctIndex) {
      score++;
    }
  
    nextButton.classList.remove("hidden");
  }
  
  // Função para mostrar o resultado
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultContainer.classList.remove("hidden");
  
    resultMessage.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
  }
  
  // Função para reiniciar o quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }
  
  // Navegação entre perguntas
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  // Reiniciar quiz
  restartButton.addEventListener("click", restartQuiz);
  
  // Inicia o quiz
  loadQuestion();  
