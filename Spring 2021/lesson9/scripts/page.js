window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    //window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
})

window.addEventListener('load', (event) => {
    const week = document.querySelector('#weekday');
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    week.textContent = weekday[d.getDay()];

    const pancake = document.getElementById('pancakes');
    if (d.getDay() == 5) { //5 is Friday

        pancake.style.display = "block";
    } else {
        pancake.style.display = "none";
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
})

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

window.addEventListener('load', (event) => {
    getTowns();
})