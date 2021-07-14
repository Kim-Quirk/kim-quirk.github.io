window.addEventListener('load', () => {
    // Javascript for Navigation
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

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
                card.appendChild(ordinance);
                card.appendChild(summary);
                card.appendChild(closures);

                document.querySelector('div.cards').appendChild(card);
                card.classList.add("card");

            }
        });
}

window.addEventListener('load', (event) => {
    getTemples();
})