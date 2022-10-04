const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
	'Jeff Bezos',
	'Bill Gates',
	'Warren Buffet',
	'Bernard Arnault',
	'Carlos Slim Helu',
	'Amancio Ortega',
	'Larry Ellison',
	'Mark Zuckerberg',
	'Michael Bloomberg',
	'Larry Page',
];

// Store list items
const listItems = [];

let dragStartIndex;

// Insert list items into DOM
function createList() {
	[...richestPeople]
		.map((person) => ({ value: person, sort: Math.random() }))
		.sort((personOne, personTwo) => personOne.sort - personTwo.sort)
		.map((person) => person.value)
		.forEach((person, index) => {
			const listItem = document.createElement('li');

			listItem.setAttribute('data-index', index);

			listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p class="person-name">${person}</p>
      <i class="fas fa-grip-lines"></i>
    </div>
    `;

			listItems.push(listItem);

			draggable_list.appendChild(listItem);
		});
}

createList();
