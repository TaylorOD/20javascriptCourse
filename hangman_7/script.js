const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-again')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')

const figureParts = document.querySelectorAll('.figure-part')

const words = ['application', 'programming', 'interface', 'wizard']
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = []
const wrongLetters = []

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `${selectedWord
    .split("")
    .map(letter => `
    <span class="letter">
      ${correctLetters.includes(letter) ? letter : ''}
    </span>`)
    .join('')
  }`
  const innerWord = wordEl.innerText.replace(/\n/g, '')

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won!"
    popup.style.display = 'flex'
  }
}

// Update wrong letters element 
function updateWrongLettersEl() {
  console.log("wrong letter")
}

// Show notification
function showNotification() {
  notification.classList.add('show')

  setTimeout(() => {
    notification.classList.remove('show')
  }, 2000)
}

// Keydown letter press
window.addEventListener('keydown', e => {
  if (alphabet.includes(e.key)) {
    const letter = e.key
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter)

        displayWord()
      } else {
        showNotification()
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter)

        updateWrongLettersEl()
      } else {
        showNotification()
      }
    }
  }
})

displayWord()
