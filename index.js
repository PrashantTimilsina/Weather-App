"use strict";
const apiKey = "34ccdd65aaac120aa9b484832eb5f24b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".home input");
const searchBtn = document.querySelector(".home button");
const weatherIcon = document.querySelector(".weather-icon");
const heroSection = document.querySelector(".weather");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tempr").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "mist.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  heroSection.style.display = "block";
  checkWeather(searchInput.value);
});
