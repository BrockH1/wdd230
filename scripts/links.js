const baseURL = "https://brockh1.github.io/wdd230/";
const linksURL = "https://brockh1.github.io/wdd230/data/links.json";
const activities = document.querySelector(".activity-card");
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();

  function displayLinks(weeks){
    weeks.forEach(week => {
        week.forEach(link => {
            const url = document.createElement('p');
            const title = document.createElement('p');
            url.textContent = 

        })
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