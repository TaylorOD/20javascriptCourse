const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// capture user speak
function onSpeak(e) {
	const msg = e.results[0][0].transcript;

	writeMessage(msg);
}

// Generate random number
function getRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

function writeMessage(message) {}

function checkNumber() {}

// Speak result
recognition.addEventListener('result', onSpeak);
