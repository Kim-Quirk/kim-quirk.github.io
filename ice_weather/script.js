async function getWeather() {
    const url = "https://api.openweathermap.org/data/2.5/forecast?zip=83440,us&units=imperial&appid=be8753d36dab0642baf37a7f8906882f";
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

function daysOfWeek(date) {

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday;
}

function weather() {
    const w = getWeather()
        .then(function (weather) {
            // const date = new Date(); // Make this dynamic (Pull the next couple dates instead of hard coding them)
            // console.log(date);

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

            // Dynamically change city name
            let cityName = document.querySelector("#city-name");
            cityName.textContent = weather.city.name;

            let desc = document.querySelector("#current-weather-desc");
            desc.textContent = capitalizeFirstLetter(weather.list[0].weather[0].description);

            var dayNum = 1;
            var week = daysOfWeek();
            for (let i = 0; i < weather.list.length; i++) {
                if (i == 8 || i == 16 || i == 24 || i == 32 || i == 39) {
                    let day = document.querySelector('#weekday' + dayNum);
                    var day1 = new Date(weather.list[i].dt_txt);
                    day1.getDay();
                    day.textContent = week[day1.getDay()];

                   

                    let icon = document.querySelector('#icon' + dayNum);
                    switch (weather.list[i].weather[0].main) {
                        case 'Clear':
                            icon.setAttribute('class', 'wi wi-day-sunny')
                            break;
                        case 'Thunderstorm':
                            icon.setAttribute('class', 'wi wi-thunderstorm')
                            break;
                        case 'Drizzle':
                            icon.setAttribute('class', 'wi wi-showers')
                            break;
                        case 'Rain':
                            icon.setAttribute('class', 'wi wi-rain')
                            break;
                        case 'Snow':
                            icon.setAttribute('class', 'wi wi-snow')
                            break;
                        case 'Clouds':
                            icon.setAttribute('class', 'wi wi-cloud')
                            break;
                        default:
                    }

                    dayNum++;
                }
            }

        });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}

window.addEventListener('load', weather());