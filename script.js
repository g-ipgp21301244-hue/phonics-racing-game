const words = ["goat", "tie", "house", "think", "coat"];
let current = 0;
let position = 0;

const wordDisplay = document.getElementById("word");
const feedback = document.getElementById("feedback");
const car = document.getElementById("car");

wordDisplay.innerText = words[current];

// Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function startListening() {
  recognition.start();
}

recognition.onresult = function(event) {
  const speech = event.results[0][0].transcript.toLowerCase();
  checkAnswer(speech);
};

function checkAnswer(speech) {
  let target = words[current];

  if (speech.includes(target)) {
    feedback.innerText = "✅ Good pronunciation!";
    moveCar();
    nextWord();
  } else {
    feedback.innerText = "❌ Try again! Listen carefully.";
  }
}

function moveCar() {
  position += 100;
  car.style.left = position + "px";
}

function nextWord() {
  current++;

  if (current < words.length) {
    wordDisplay.innerText = words[current];
  } else {
    wordDisplay.innerText = "🏁 Mission Accomplished!";
  }
}
