

async function getMemberData(){
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data);
    getSpotlight(data);
}

getMemberData();

function getSpotlight(members){
const spotlight = [];
const spotImage = [];
members.forEach(member =>{
    if (member.membership == 'Silver' || member.membership == 'Gold'){
        spotlight.push(member.name);
        spotImage.push(member.image);
    }
})

console.log(spotlight);
const ad = document.createElement('p');

random = Math.floor(Math.random()*spotlight.length);

logo = document.createElement('img');
logo.setAttribute('width', '300');
logo.setAttribute('height', '300');

section = document.querySelector('.businesses');

ad.textContent = `Check out this awesome organization, ${spotlight[random]}!`;
logo.setAttribute('src', spotImage[random]);

section.appendChild(ad);
section.appendChild(logo);


}
