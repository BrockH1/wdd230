document.getElementById('year').innerHTML = new Date().getFullYear();

document.getElementById('lastModified').innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit! Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

let lastVisitedDate = localStorage.getItem('lastVisitedDate');
const currentDate = new Date();

if (lastVisitedDate){
	const dateLastVisited = new Date(JSON.parse(lastVisitedDate));

	const timeSinceLastVisit = currentDate.getTime() - dateLastVisited.getTime();
	const daysSinceLastVisit = Math.round(timeSinceLastVisit / (1000 * 60 * 60 * 24));

	const spanLastVisited = document.querySelector('#lastVisited');
	spanLastVisited.textContent = daysSinceLastVisit;
}

else{
	const dateLastVisited = JSON.stringify(Date.now());

	localStorage.setItem('lastVisitedDate', dateLastVisited);
}

