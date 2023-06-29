const cards = document.querySelector('#cards');

async function getMemberData(){
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data);
    displayMembers(data);
}

getMemberData();

function displayMembers(members){
    members.forEach(member => {
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const image = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');
        const membership = document.createElement('p');
        const industry = document.createElement('p');
        
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        membership.textContent = `Membership Level: ${member.membership}`;
        industry.textContent = `Industry: ${member.industry}`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.name}`)
        image.setAttribute('loading', 'lazy')
        image.setAttribute('width', '300')
        image.setAttribute('height', '120')

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(industry);

        cards.appendChild(card);
});
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

