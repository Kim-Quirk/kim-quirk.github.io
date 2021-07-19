window.addEventListener('load', () => {
    // Javascript for Navigation
    const hambutton = document.querySelector('.ham');
    const subhambutton = document.querySelector('.hamSub');
    const mainnav = document.querySelector('#navigation');
    const subnav = document.querySelector('#subpages');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    if (document.URL.includes("services.html") || document.URL.includes("missionary.html") || document.URL.includes("reception.html")) {
        subhambutton.addEventListener('click', () => {
            subnav.classList.toggle('responsive')
        }, false);
    }

    // Javascript for Footer copyright and date information
    var d = new Date();
    const week = document.querySelector('#weekday');
    var weekday = daysOfWeek(d);
    week.textContent = weekday;

    const dayNum = document.getElementById('day');
    dayNum.textContent = d.getDate();

    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthNum = document.getElementById('month');
    monthNum.textContent = monthName[d.getMonth()];

    const year = document.getElementById('year');
    year.textContent = d.getFullYear();

    const footer = document.querySelector("#copyrightyear");
    footer.textContent = d.getFullYear();
})

function expandImage(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

// Function that creates returns the name of the weekday
function daysOfWeek(date) {

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[date.getDay()];
}

// window.addEventListener('load', () => {
// })

async function getDailyWeather(zip) {
    let url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&appid=580759d3ebbaeeb067f5d98c62421257";
    const response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

async function getTemples() {
    const requestURL = 'json/temples.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const temples = jsonObject;
            for (let i = 0; i < temples.length; i++) {
                let card = document.createElement('section');
                let grid = document.createElement('div');
                let h2 = document.createElement('h1');
                let phone = document.createElement('p');
                let email = document.createElement('p');
                let address = document.createElement('p');
                let services = document.createElement('p');
                let history = document.createElement('p');
                let ordinance = document.createElement('section');
                let closures = document.createElement('p');
                let summary = document.createElement('p');
                let image = document.createElement('img');
                let temp = document.createElement('p');

                h2.textContent = temples[i].name;
                phone.innerHTML += `
                    <b>Phone Number</b>
                    <br>
                    ${temples[i].phone}`;
                email.innerHTML += `
                    <b>Email Address</b>
                    <br>
                    ${temples[i].email}`;
                address.innerHTML = `
                <b>Address</b>
                <br>
                ${temples[i].address1}
                <br>
                ${temples[i].city}, ${temples[i].state} ${temples[i].zip}
                `;
                const service = temples[i].services;
                services.innerHTML += `
                    <b>Services</b>
                    <br>`;
                for (let i = 0; i < service.length; i++) {
                    if (i != 0) {
                        services.innerHTML += `
                        <br>
                        `;
                    }
                    services.innerHTML += `${service[i]}`;
                }
                const historyS = temples[i].history;
                history.innerHTML += `
                    <b>History</b>
                    <br>`;
                for (let i = 0; i < historyS.length; i++) {
                    if (i % 2 != 0 && i != 0) {
                        history.innerHTML += ` - `
                    }
                    if (i % 2 == 0 && i != 0) {
                        history.innerHTML += `
                        <br>
                        `;
                    }
                    history.innerHTML += `${historyS[i]}`;
                }

                const current = getDailyWeather(temples[i].zip)
                    .then(function (weather) {
                        console.log(weather);
                        temp.innerHTML = `
                            <p><b>Current Weather</b>
                            <br>
                            Condition: ${weather.weather[0].main}
                            <br>
                            Temperature: ${Math.round(weather.main.temp)}°F
                            <br>
                            Humidity: ${weather.main.humidity}%
                            <br>
                            Wind Speed: ${ Math.round(weather.wind.speed)} MPH
                            </p>
                            `;
                    });

                ordinance.innerHTML = `
                <p><b>Ordinance and Session Schedule</b>
                <br>
                ${temples[i].ordinance}</p>
                `;
                const closure = temples[i].closures;
                closures.innerHTML += `
                    <b>Closures</b>
                    <br>`;
                for (let i = 0; i < closure.length; i++) {
                    closures.innerHTML += `${closure[i]}
                    <br>`;
                }
                summary.innerHTML = `
                <b>Summary</b>
                <br>
                ${temples[i].summary}`;
                image.setAttribute('src', temples[i].imageurl);
                image.setAttribute('alt', temples[i].name);

                phone.classList.add("left");
                email.classList.add("left");
                address.classList.add("left");
                services.classList.add("left");
                history.classList.add("left");
                image.classList.add("right");

                grid.appendChild(phone);
                grid.appendChild(email);
                grid.appendChild(address);
                grid.appendChild(services);
                grid.appendChild(history);
                grid.appendChild(image);

                card.appendChild(h2);
                card.appendChild(grid);
                card.appendChild(temp);
                card.appendChild(ordinance);
                card.appendChild(summary);
                card.appendChild(closures);

                document.querySelector('div.cards').appendChild(card);
                card.classList.add("card");

            }
        });
}

window.addEventListener('load', (event) => {
    if (document.URL.includes("temples.html")) {
        getTemples();
    }
})