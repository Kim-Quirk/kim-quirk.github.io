window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    //window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
})

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

window.addEventListener('load', (event) => {
    const week = document.querySelector('#weekday');
    // var d = new Date();
    // var weekday = new Array(7);
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";
    var d = new Date();
    var weekday = daysOfWeek(d);
    week.textContent = weekday[d.getDay()];

    if (document.URL.includes("preston.html")) {
        const pancake = document.getElementById('pancakes');
        if (d.getDay() == 5) { //5 is Friday

            pancake.style.display = "block";
        } else {
            pancake.style.display = "none";
        }
    }

    const dayNum = document.getElementById('day');
    dayNum.textContent = d.getDate();

    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthNum = document.getElementById('month');
    monthNum.textContent = monthName[d.getMonth()];

    const year = document.getElementById('year');
    year.textContent = d.getFullYear();

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = d.getFullYear();
})

function windChill() {
    const chillP = document.getElementById("chill");
    var windchill = 0;
    var temp = document.getElementById("temp").innerHTML;
    var wind = document.getElementById("wind").innerHTML;
    if (temp <= 50 && wind > 3) {
        windchill = Math.round(35.74 + 0.621 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16);
        windchill = windchill + "°F";
    } else {
        windchill = "N/A"
    }
    chillP.innerHTML = windchill;
}

async function getDailyWeather() {
    let url;
    if (document.URL.includes("preston.html")) {
        url = "https://api.openweathermap.org/data/2.5/weather?zip=83263,us&units=imperial&appid=580759d3ebbaeeb067f5d98c62421257";
    }
    if (document.URL.includes("fishhaven.html")) {
        url = "https://api.openweathermap.org/data/2.5/weather?zip=83287,us&units=imperial&appid=580759d3ebbaeeb067f5d98c62421257";
    }
    if (document.URL.includes("sodasprings.html")) {
        url = "https://api.openweathermap.org/data/2.5/weather?zip=83276,us&units=imperial&appid=580759d3ebbaeeb067f5d98c62421257";
    }

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

async function getForecastWeather() {
    let url;
    if (document.URL.includes("preston.html")) {
        url = "https://api.openweathermap.org/data/2.5/forecast?zip=83263,us&units=imperial&appid=580759d3ebbaeeb067f5d98c62421257";
    }
    if (document.URL.includes("fishhaven.html")) {
        url = "https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&units=imperial&appid=580759d3ebbaeeb067f5d98c62421257";
    }
    if (document.URL.includes("sodasprings.html")) {
        url = "https://api.openweathermap.org/data/2.5/forecast?zip=83276,us&units=imperial&appid=580759d3ebbaeeb067f5d98c62421257";
    }
    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

function weather() {
    const current = getDailyWeather()
        .then(function (weather) {
            console.log(weather);
            let condition = document.getElementById('condition');
            let temp = document.getElementById('temp');
            let highTemp = document.getElementById('highTemp');
            let humid = document.getElementById('humid');
            let wind = document.getElementById('wind');

            condition.textContent = weather.weather[0].main;
            temp.textContent = Math.round(weather.main.temp);
            highTemp.textContent = Math.round(weather.main.temp_max);
            humid.textContent = weather.main.humidity;
            wind.textContent = Math.round(weather.wind.speed);
            windChill();
        });
    const forecast = getForecastWeather()
        .then(function (weather) {
            console.log(weather);
            windChill();
            var dayNum = 0;
            for (let i = 0; i < weather.list.length; i++) {
                let date = new Date(weather.list[i].dt_txt);
                if (date.getHours() == 18) {
                    let day = document.getElementById('day' + dayNum);
                    var weekday = daysOfWeek(date);
                    day.textContent = weekday[date.getDay()];

                    let temp = document.getElementById('temp' + dayNum);
                    temp.textContent = Math.round(weather.list[i].main.temp);

                    let img = document.getElementById('img' + dayNum);
                    img.setAttribute('src', 'https://openweathermap.org/img/wn/' + weather.list[i].weather[0].icon + '@2x.png')
                    //https://openweathermap.org/img/wn/04d@2x.png

                    dayNum++;
                }
            }
        });
}

window.addEventListener('load', weather());

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

async function getTowns() {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const towns = jsonObject['towns'];

            let prestonMotto = document.querySelector("#preston-motto");
            let prestonYear = document.querySelector("#preston-year");
            let prestonPop = document.querySelector("#preston-population");
            let prestonRain = document.querySelector("#preston-rain");

            prestonMotto.textContent = towns[6].motto;
            prestonYear.textContent = "Year Founded: " + towns[6].yearFounded;
            prestonPop.textContent = "Current Population: " + towns[6].currentPopulation;
            prestonRain.textContent = "Average Rainfall: " + towns[6].averageRainfall;

            let sodaMotto = document.querySelector("#soda-motto");
            let sodaYear = document.querySelector("#soda-year");
            let sodaPop = document.querySelector("#soda-population");
            let sodaRain = document.querySelector("#soda-rain");

            sodaMotto.textContent = towns[0].motto;
            sodaYear.textContent = "Year Founded: " + towns[0].yearFounded;
            sodaPop.textContent = "Current Population: " + towns[0].currentPopulation;
            sodaRain.textContent = "Average Rainfall: " + towns[0].averageRainfall;

            let fishMotto = document.querySelector("#fish-motto");
            let fishYear = document.querySelector("#fish-year");
            let fishPop = document.querySelector("#fish-population");
            let fishRain = document.querySelector("#fish-rain");

            fishMotto.textContent = towns[2].motto;
            fishYear.textContent = "Year Founded: " + towns[2].yearFounded;
            fishPop.textContent = "Current Population: " + towns[2].currentPopulation;
            fishRain.textContent = "Average Rainfall: " + towns[2].averageRainfall;
        });
}

async function getEvents() {
    const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            const towns = jsonObject['towns'];
            var x;
            if (document.URL.includes("preston.html")) {
                x = 6;
            }
            if (document.URL.includes("fishhaven.html")) {
                x = 2;
            }
            if (document.URL.includes("sodasprings.html")) {
                x = 0;
            }
            console.log(x);
            console.log(towns[6]);
            let town = towns[x];
            buildEventCard(town);
        });
}

function buildEventCard(town) {
    // let title = document.createElement("h6");
    // title.innerHTML = "Upcoming Events";
    // card.appendChild(title);
    // let line = document.createElement("hr");
    // card.appendChild(line);

    for (let i = 0; i < town.events.length; i++) {
        let card = document.createElement("p");
        card.innerHTML = town.events[i];
        document.querySelector("#events").appendChild(card);
    }

}

window.addEventListener('load', (event) => {
    if (document.URL.includes("index.html")) {
        getTowns();
    }
    if (document.URL.includes("preston.html")) {
        getEvents();
    }
    if (document.URL.includes("fishhaven.html")) {
        getEvents();
    }
    if (document.URL.includes("sodasprings.html")) {
        getEvents();
    }
})