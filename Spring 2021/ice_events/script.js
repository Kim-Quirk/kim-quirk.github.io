window.addEventListener('load',()=>{
    const requestURL = "https://www.ahfx.com/events.php"
    fetch(requestURL)
      .then((response)=> {
          return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach((event)=>{
                    buildEventCard(event);
            });
        });
});
function buildEventCard(event) {
    let dateStart = new Date(event[1].properties.start);
    let dateEnd = new Date(event[1].properties.end);
    let dateStringStart = buildTime(dateStart);
    let dateStringEnd = buildTime(dateEnd);
    let dateSuffix = buildDateSuffix(dateStart);
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(event);
    let card = document.createElement("section");
    card.classList.add("event");
    card.innerHTML = `<h2><strong>${event[1].properties.name}</strong></h2>
                      <p>${event[1].type}</p>
                      <p>${monthName[dateStart.getMonth()]} ${dateStart.getDay()}${dateSuffix}, ${dateStart.getFullYear()}</p>
                      <p>${dateStringStart} - ${dateStringEnd} in the ${event[1].properties.location}</p>
                      <p>${event[1].properties.summary}</p>
                      `;
    document.querySelector("#events").appendChild(card);
}

function buildTime(date) {
    let suffix = "error";
    let hours = date.getHours()
    let minutes = date.getMinutes();
    if (hours > 12){
        suffix = "pm";
        hours = hours - 12;
    }
    else if (hours == 12) {
        suffix = "pm";
    }
    else {
        suffix = "am";
    }

    if (minutes == 0) {
        minutes = "00";
    }

    let dateString = hours + ":" + minutes + " " + suffix;
    return dateString;
}

function buildDateSuffix (date) {
    let day = date.getDay();
    let suffix = "error";
    switch(day) {
        case 1:
        case 21:
        case 31:
          suffix = "st";
          break;
        case 2:
        case 22:
            suffix = "nd";
          break;
        case 3:
        case 23:
            suffix = "rd";
          break;
        default:
          suffix = "th";
      }
    return suffix;
}