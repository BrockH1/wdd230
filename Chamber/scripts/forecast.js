const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');
const day1Icon = document.querySelector('#day1-icon');
const day2Icon = document.querySelector('#day2-icon');
const day3Icon = document.querySelector('#day3-icon');
const day1Desc = document.querySelector('#day1-desc');
const day2Desc = document.querySelector('#day2-desc');
const day3Desc = document.querySelector('#day3-desc');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.70&lon=-84.05&units=imperial&appid=afd9298db89cc668ea7c2b84f9ede06c';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    day1.innerHTML = `${data.list[0].main['temp']}&deg;F`;
    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc1 = data.list[0].weather[0].description;
    day1Icon.setAttribute('src', iconsrc1);
    day1Desc.textContent = `${desc1}`;
    day2.innerHTML = `${data.list[1].main['temp']}&deg;F`;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
    let desc2 = data.list[1].weather[0].description;
    day2Icon.setAttribute('src', iconsrc2);
    day2Desc.textContent = `${desc2}`;
    day3.innerHTML = `${data.list[2].main['temp']}&deg;F`;
    const iconsrc3 = `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`;
    let desc3 = data.list[2].weather[0].description;
    day3Icon.setAttribute('src', iconsrc3);
    day3Desc.textContent = `${desc3}`;
}

apiFetch();

var weekday = new Date();
button = document.getElementById('banner-btn');
banner = document.querySelector('.banner');
text = document.getElementById('text');

banner.classList.toggle('close');
text.classList.toggle('close');

if (weekday.getDay() == 1||weekday.getDay() == 2||weekday.getDay() == 3)
{
    banner.classList.toggle('close');
    text.classList.toggle('close');
}

button.addEventListener('click',() => {
    banner.classList.toggle('close');
    text.classList.toggle('close');
})
