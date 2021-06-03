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
    }
    else {
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
    if ( temp <= 50 && wind > 3)
    {
        windchill = Math.round(35.74 + 0.621*temp - 35.75*wind**0.16 + 0.4275*temp*wind**0.16);
        windchill = windchill + "°F";
    }
    else {
        windchill = "N/A"
    }
    chillP.innerHTML = windchill;
})