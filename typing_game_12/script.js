const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

let randomWord;

let score = 0;

let time = 10;

// Set difficulty to value in local storage or medium
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Focus on text on start
text.focus()

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord()
  word.innerHTML = randomWord
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;

  if (time === 0) {
    clearInterval(time);
    // End Game
    gameOver();
  }
}

// End game function, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">New Game</button>
  `
  endgameEl.style.display = "flex"
}

// Update time
function updateTime() {
  time -= 1
  timeEl.innerHTML = time + 's';
}

addWordToDOM()

// Event listener
text.addEventListener('input', e => {
  const insertedText = e.target.value
  if (insertedText === randomWord) {
    addWordToDOM()
    updateScore()

    // Clear input
    e.target.value = '';

    time += 5;

    if (difficulty === 'hard') {
      time += 2
    } else if (difficulty === 'medium') {
      time += 3
    } else {
      time += 5
    }

    updateTime()
  }
})

// Settings btn click
settingsBtn.addEventListener('click', () => 
settings.classList.toggle('hide'))

// Settings select 
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
})
