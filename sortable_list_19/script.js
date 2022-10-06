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

	addEventListeners();
}

function dragStart() {
	dragStartIndex = +this.closest('li').getAttribute('data-index');
}
function dragEnter() {
	this.classList.add('over');
}
function dragLeave() {
	this.classList.remove('over');
}

function dragDrop() {
	const dragEndIndex = +this.getAttribute('data-index');
	swapItems(dragStartIndex, dragEndIndex);

	this.classList.remove('over');
}
function dragOver(e) {
	e.preventDefault();
}

// Swap drag and drop list items
function swapItems(fromIndex, toIndex) {
	const itemOne = listItems[fromIndex].querySelector('.draggable');
	const itemTwo = listItems[toIndex].querySelector('.draggable');

	listItems[fromIndex].appendChild(itemTwo);
	listItems[toIndex].appendChild(itemOne);
}

// Check the order of list items on button click
function checkOrder() {
	listItems.forEach((item, index) => {
		const personName = item.querySelector('.draggable').innerText.trim();

		if (personName !== richestPeople[index]) {
			item.classList.add('wrong');
		} else {
			item.classList.remove('wrong');
			item.classList.add('right');
		}
	});
}

function addEventListeners() {
	const draggables = document.querySelectorAll('.draggable');
	const dragListItems = document.querySelectorAll('.draggable-list li');

	draggables.forEach((item) => {
		item.addEventListener('dragstart', dragStart);
	});

	dragListItems.forEach((item) => {
		item.addEventListener('dragover', dragOver);
		item.addEventListener('drop', dragDrop);
		item.addEventListener('dragenter', dragEnter);
		item.addEventListener('dragleave', dragLeave);
	});
}

check.addEventListener('click', checkOrder);

createList();
