const API_key = "38465826dc19f68cadddd4da3b6bd64a";
const lat = 40.71;
const lon = 74.00;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

function loadWeather() {
    fetch(apiUrl).then(response => response.json())
        .then(data => {
            console.log(data);
            renderWeather(data);
        })
        .catch(error => console.error(error));
}

function convertDate(unix) {
    const date = new Date(unix * 1000);
    return date;
}

function renderWeather(data) {
    console.log(data.main.temp)
    document.getElementById("city").textContent = data.name;

    document.getElementById("datetime").textContent = `${convertDate(data.dt)}`;

    document.getElementById("temperature").textContent = `Temperature ${Math.round(data.main.temp)} °C`;

    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;

    document.getElementById("pressure").textContent = `Pressure: ${data.main.pressure} гПа`;

    document.getElementById("sunset").textContent =`Sunset: ${convertDate(data.sys.sunset)}`;

    document.getElementById("description").textContent = data.weather[0].description;

    const icon = data.weather[0].icon;
    document.getElementById("icon").src =`https://openweathermap.org/img/wn/${icon}@2x.png`;
    
}

document.getElementById("refresh").addEventListener("click", loadWeather);
loadWeather();
