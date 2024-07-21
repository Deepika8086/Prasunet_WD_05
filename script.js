// script.js
const apiKey = 'ee4f86fd1905da558bb429658680f912'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeather(data) {
    if (data.cod !== 200) {
        alert('Location not found');
        return;
    }

    const weatherDiv = document.getElementById('weather');
    const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} &deg;C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
    weatherDiv.innerHTML = weather;
}
