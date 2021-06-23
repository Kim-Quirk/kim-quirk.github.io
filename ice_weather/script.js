async function getWeather() {
    const url = "https://api.openweathermap.org/data/2.5/forecast?zip=83440,us&units=imperial&appid=be8753d36dab0642baf37a7f8906882f";

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

// list[0].main.temp
// 0, 8, 16, 24, 32, 39

function weather() {
    const w = getWeather()
        .then(function(weather) {
            const date = new Date(); // Make this dynamic (Pull the next couple dates instead of hard coding them)

            console.log(weather);
            let currentWeather = document.querySelector('#current-weather');
            let dayOne = document.querySelector('#one');
            let dayTwo = document.querySelector('#two');
            let dayThree = document.querySelector('#three');
            let dayFour = document.querySelector('#four');
            let dayFive = document.querySelector('#five');
            currentWeather.textContent = Math.floor(weather.list[0].main.temp) + "°F";
            dayOne.textContent = Math.floor(weather.list[8].main.temp);
            dayTwo.textContent = Math.floor(weather.list[16].main.temp);
            dayThree.textContent = Math.floor(weather.list[24].main.temp);
            dayFour.textContent = Math.floor(weather.list[32].main.temp);
            dayFive.textContent = Math.floor(weather.list[39].main.temp);
            
        });
}

window.addEventListener('load', weather());