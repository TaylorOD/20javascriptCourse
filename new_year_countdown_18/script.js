const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const convertedDays = Math.floor(diff / 1000 / 60 / 60 / 24);
	const convertedHours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const convertedMinutes = Math.floor(diff / 1000 / 60) % 60;
	const convertedSeconds = Math.floor(diff / 1000) % 60;

	// Add values to down
	days.innerHTML = convertedDays;
	hours.innerHTML = convertedHours < 10 ? '0' + convertedHours : convertedHours;
	minutes.innerHTML =
		convertedMinutes < 10 ? '0' + convertedMinutes : convertedMinutes;
	seconds.innerHTML =
		convertedSeconds < 10 ? '0' + convertedSeconds : convertedSeconds;
}

// Show spinner before countdown
setTimeout(() => {
	loading.remove();
	countdown.style.display = 'flex';
}, 1000);

// Run every seconds
setInterval(updateCountdown, 1000);
