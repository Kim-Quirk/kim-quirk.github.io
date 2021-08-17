// window.addEventListener('load', () => {
// })
async function getPerson() {
    const requestURL = 'https://www.ahfx.com/person.php';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const person = jsonObject['person'];

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let password = document.createElement('p');
            let email = document.createElement('p');
            let eye = document.createElement('p');
            let city = document.createElement('p');
            let country = document.createElement('p');
            let ip = document.createElement('p');
            let image = document.createElement('img');
            let married = document.createElement("p");

            h2.textContent = person.personal.name + ' ' + person.personal.last_name;
            password.textContent = 'Password: ' + person.online_info.password;
            email.textContent = 'Email: ' + person.online_info.email;
            eye.textContent = "Eye Color: " + person.personal.eye_color;
            country.textContent = "County: " + person.personal.country;
            city.textContent = "City: " + person.personal.city;
            ip.textContent = "IP Address: " + person.online_info.ip_address;
            image.setAttribute('src', 'https://thispersondoesnotexist.com/image');
            image.setAttribute('alt', person.personal.name + ' ' + person.personal.last_name);

            card.appendChild(h2);
            card.appendChild(email);
            card.appendChild(password);
            card.appendChild(ip)
            card.appendChild(eye);
            if (person.marriage.married == true) {
                let children = document.createElement('p');
                married.textContent = "Status: Married"
                card.append(married);
                children.textContent = "Number of Children: " + person.marriage.children;
                card.appendChild(children);
            }
            else {
                married.textContent = "Status: Single"
                card.append(married);
            }
            card.appendChild(country);
            card.appendChild(city);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);

        });
}

window.addEventListener('load', (event) => {
    getPerson();
})