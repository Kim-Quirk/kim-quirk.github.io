async function getWeather () {
    const url = 'http://api.openweathermap.org/data/2.5/weather?zip=83440,us&appid=580759d3ebbaeeb067f5d98c62421257&units=imperial&cnt=3';
    // const url = 'http://api.openweathermap.org/data/2.5/forecast/daily?zip=83440,us&appid=580759d3ebbaeeb067f5d98c62421257&units=imperial&cnt=3';
    // const url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7&appid=580759d3ebbaeeb067f5d98c62421257';
    
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const weather = jsonObject;
        console.log(weather);
    })
}

window.addEventListener('load', (event)=>{
    getWeather();
})