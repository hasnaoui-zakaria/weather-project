const apiKey = '2e5fbce69b041062c618c9ecceaebe3c';
const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const searchInput = document.getElementById('location')
const searchBtn = document.getElementById('getLocation')
const weatherIcon = document.getElementById('icon')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.getElementById("city").innerHTML = data.name + ' - ' + data.sys.country;
    document.getElementById("temp").innerHTML = data.main.temp + " °C";
    document.getElementById("humidity").innerHTML = data.main.humidity + " %";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

    weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`

    console.log(data)
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value)
})

checkWeather('casablanca')

let backgrounds = ['./images/pexels-binyamin-mellish-108941.jpg', './images/pexels-magda-ehlers-2114014.jpg', './images/pexels-tahir-shaw-186980.jpg']

/* setInterval( () => {
    document.getElementsByTagName('body')[0].style.background = `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`
    document.getElementsByTagName('body')[0].style.backgroundSize = "cover"
    document.getElementsByTagName('body')[0].style.backgroundPosition = "center"
},3000) */

document.getElementsByTagName('body')[0].style.background = `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`
document.getElementsByTagName('body')[0].style.backgroundSize = "cover"
document.getElementsByTagName('body')[0].style.backgroundPosition = "center"