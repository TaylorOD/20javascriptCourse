const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
const cardsData = [
	{
		question: 'What is constant run time/time complexity?',
		answer:
			'O(1) <br><br> Independent of the input size. <br><br> Examples: Lookup in hash table, assign value, access in array (array[1])',
	},
	{
		question: 'Array Operation Time Complexity?',
		answer:
			'Lookup/Access: O(1) <br><br> Search: O(n) <br><br> Insert O(n) <br><br> Delete: O(n)',
	},
	{
		question: 'What is linear run time/time complexity?',
		answer:
			'O(n) <br><br> Grows proportional to input size <br><br> Examples: Looping through elements, search in a Linked List or Array',
	},
];

// Create all cards
function createCards() {
	cardsData.forEach((data, index) => {
		createCard(data, index);
	});
}

// Create a single card in DOM
function createCard(data, index) {
	const card = document.createElement('div');
	card.classList.add('card');

	if (index === 0) {
		card.classList.add('active');
	}

	card.innerHTML = `
  <div class="inner-card">
    <div class="inner-card-front">
      <p>
        ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        ${data.answer}
      </p>
    </div>
  </div>
  `;

	card.addEventListener('click', () => card.classList.toggle('show-answer'));

	// Add to DOM cards
	cardsEl.push(card);
	cardsContainer.appendChild(card);

	updateCurrentText();
}

function updateCurrentText() {
	currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();
