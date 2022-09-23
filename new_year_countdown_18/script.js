const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const convertedDays = Math.floor(diff / 1000 / 60 / 60 / 24);
	const convertedHours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const convertedMinutes = Math.floor(diff / 1000 / 60) % 60;
	const convertedSeconds = Math.floor(diff / 1000) % 60;

	days.innerHTML = convertedDays;
	hours.innerHTML = convertedHours < 10 ? '0' + convertedHours : convertedHours;
	minutes.innerHTML =
		convertedMinutes < 10 ? '0' + convertedMinutes : convertedMinutes;
	seconds.innerHTML =
		convertedSeconds < 10 ? '0' + convertedSeconds : convertedSeconds;
}

setInterval(updateCountdown, 1000);
