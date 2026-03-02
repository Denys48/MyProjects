const API_key = "38465826dc19f68cadddd4da3b6bd64a";
const lat = 40.71;
const lon = 74.00;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;

async function loadWeather() {
    try{
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        renderWeather(data);
    }
    catch(error){
        console.error("Error fetching weather data:", error);
    }
}

function convertDate(unix, timezone) {
    const localTime = new Date((unix+timezone) * 1000);
    const UTC = timezone / 3600;
    const formaattedTime = new Intl.DateTimeFormat("uk-UA", {
        timeZone: "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit" 
    }).format(localTime);

    return `${formaattedTime} (UTC${UTC >= 0 ? "+" : ""}${UTC})`;
}

function renderWeather(data) {
    document.getElementById("city").textContent = data.name;

    document.getElementById("date").textContent = `${convertDate(data.dt, data.timezone)}`;

    document.getElementById("temperature").textContent = `Temperature ${Math.round(data.main.temp)} °C`;

    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;

    document.getElementById("pressure").textContent = `Pressure: ${data.main.pressure} гПа`;

    document.getElementById("sunset").textContent =`Sunset: ${convertDate(data.sys.sunset, data.timezone)}`;

    document.getElementById("description").textContent = data.weather[0].description;

    const icon = data.weather[0].icon;
    document.getElementById("icon").src =`https://openweathermap.org/img/wn/${icon}@2x.png`;
    
}

document.getElementById("refresh").addEventListener("click", loadWeather);
loadWeather();
