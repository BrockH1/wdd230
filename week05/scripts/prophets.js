const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets)
}

getProphetData();

function displayProphets(prophets){
    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birth = document.createElement('p');
        const place = document.createElement('p')
        
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Date of birth: ${prophet.birthdate}`;
        place.textContent = `Place of birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '340')
        portrait.setAttribute('height', '440')

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(portrait);

        cards.appendChild(card);
});
}