const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// Search by song or artist
async function searchSongs(term) {
	const res = await fetch(`${apiURL}/suggest/${term}`);
	const data = await res.json();

	showData(data);
}

// Show song and artist in DOM
function showData(APIData) {
	result.innerHTML = `
  <ul class="songs">
    ${APIData.data
			.map(
				(song) => `
      <li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
      </li>`
			)
			.join('')}
  </ul>
  `;

	if (APIData.prev || APIData.next) {
		more.innerHTML = `
      ${
				APIData.prev
					? `<button class="btn" onClick="getMoreSongs('${APIData.prev}')">Prev</button>`
					: ``
			}
      ${
				APIData.next
					? `<button class="btn" onClick="getMoreSongs('${APIData.next}')">Next</button>`
					: ``
			}
    `;
	} else {
		more.innerHTML = '';
	}
}

// Get prev and next songs
async function getMoreSongs(url) {
	const res = await fetch(
		`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
	);
	const data = await res.json();
	const contents = JSON.parse(data.contents);
	showData(contents);
}

// Event Listeners
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value.trim();
	if (!searchTerm) {
		alert('Please type in a search term');
	} else {
		searchSongs(searchTerm);
	}
});

async function getLyrics(artist, songTitle) {
	const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
	const data = await res.json();

	const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
	result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
	<span>${lyrics}</span>`;

	more.innerHTML = '';
}

// Get lyrics button click
result.addEventListener('click', (e) => {
	const clickedEl = e.target;
	if (clickedEl.tagName === 'BUTTON') {
		const artist = clickedEl.getAttribute('data-artist');
		const songTitle = clickedEl.getAttribute('data-songtitle');

		getLyrics(artist, songTitle);
	}
});
